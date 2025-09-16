// DPWRK Safari Extension - Debug Version
console.log('🎯 DPWRK Extension: Background script loaded');

// Configuration
const CHECK_INTERVAL = 10000;
let SERVER_PORT = 3000; // Default port, will be discovered
let CLASSIFY_API_URL = 'http://localhost:3000/classify';
let SESSION_API_URL = 'http://localhost:3000/session';

// State
let currentGoals = null;
let isSessionActive = false;
let goalsCheckInterval = null;

// Server discovery
async function discoverServerPort() {
    console.log('🔍 Discovering DPWRK server port...');

    // Try ports 3000-3010
    for (let port = 3000; port <= 3010; port++) {
        try {
            // Create a timeout promise for older browsers that don't support AbortSignal.timeout
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('timeout')), 1000)
            );

            const fetchPromise = fetch(`http://localhost:${port}/health`, {
                method: 'GET'
            });

            const response = await Promise.race([fetchPromise, timeoutPromise]);

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'ok') {
                    SERVER_PORT = port;
                    CLASSIFY_API_URL = `http://localhost:${port}/classify`;
                    SESSION_API_URL = `http://localhost:${port}/session`;
                    console.log(`✅ Found DPWRK server on port ${port}`);
                    return;
                }
            }
        } catch (error) {
            // Port not available or server not responding, continue
            // console.log(`Port ${port}: ${error.message}`);
        }
    }

    console.log('⚠️ DPWRK server not found on any port, using default 3000');
    // Reset to default values
    SERVER_PORT = 3000;
    CLASSIFY_API_URL = 'http://localhost:3000/classify';
    SESSION_API_URL = 'http://localhost:3000/session';
}

// Start monitoring
discoverServerPort().then(() => {
    console.log(`🌐 Using server URLs: ${SESSION_API_URL}, ${CLASSIFY_API_URL}`);
    startGoalsMonitoring();
});

// Listen for ALL tab events - catch dynamic changes
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('🔔 TAB EVENT:', {
        url: tab.url,
        title: tab.title,
        status: changeInfo.status,
        urlChanged: !!changeInfo.url,
        sessionActive: isSessionActive
    });

    // Process on ANY change when session is active - not just complete status
    if (isSessionActive && tab.url) {
        if (shouldSkipURL(tab.url)) {
            console.log('⏭️ SKIPPING:', tab.url);
            return;
        }

        // Check if this is a meaningful change (not just loading states)
        if (changeInfo.status === 'complete' || changeInfo.url || changeInfo.title) {
            console.log('🌐 ANALYZING:', tab.url);
            console.log('🎯 Goals:', currentGoals);
            console.log('🔍 Sending to Gemini');

            classifyWithGemini(tab.url, tab.title || '', currentGoals, tabId);
        }
    } else {
        console.log('❌ NOT PROCESSING:', {
            sessionActive: isSessionActive,
            hasUrl: !!tab.url
        });
    }
});

// Also listen for tab activation (when switching between tabs)
browser.tabs.onActivated.addListener(async (activeInfo) => {
    if (isSessionActive) {
        try {
            const tab = await browser.tabs.get(activeInfo.tabId);
            console.log('🔄 TAB ACTIVATED:', tab.url);

            if (tab.url && !shouldSkipURL(tab.url)) {
                console.log('🌐 ANALYZING ACTIVATED TAB:', tab.url);
                classifyWithGemini(tab.url, tab.title || '', currentGoals, activeInfo.tabId);
            }
        } catch (error) {
            console.log('⚠️ Error getting activated tab:', error);
        }
    }
});

// Classification function
async function classifyWithGemini(url, title, goals, tabId) {
    try {
        console.log('📤 Sending to server:', { url, title, goals });

        const response = await fetch(CLASSIFY_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: `URL: ${url}. Title: ${title}`,
                goals: goals
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('🤖 Gemini decision:', result.allowed ? 'ALLOW' : 'BLOCK', 'for', url);

            if (!result.allowed) {
                console.log('🚫 BLOCKING PAGE');
                blockPage(tabId);
            }
        } else {
            console.log('⚠️ Classification failed, allowing by default');
        }
    } catch (error) {
        console.log('⚠️ Classification error, attempting to rediscover server:', error);

        // Try to rediscover the server port and retry once
        await discoverServerPort();

        try {
            const retryResponse = await fetch(CLASSIFY_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    body: `URL: ${url}. Title: ${title}`,
                    goals: goals
                })
            });

            if (retryResponse.ok) {
                const result = await retryResponse.json();
                console.log('🤖 Gemini decision (retry):', result.allowed ? 'ALLOW' : 'BLOCK', 'for', url);

                if (!result.allowed) {
                    console.log('🚫 BLOCKING PAGE');
                    blockPage(tabId);
                }
            } else {
                console.log('⚠️ Classification retry failed, allowing by default');
            }
        } catch (retryError) {
            console.log('⚠️ Classification retry error, allowing by default:', retryError);
        }
    }
}

// Skip system URLs
function shouldSkipURL(url) {
    if (!url) return true;

    const skipPatterns = [
        'chrome://', 'safari://', 'moz-extension://', 'safari-extension://',
        'safari-web-extension://', 'blocked.html', 'extension://',
        'about:blank', 'newtab', 'startpage', 'file://', 'data:'
    ];

    return skipPatterns.some(pattern => url.includes(pattern));
}

// Session monitoring
function startGoalsMonitoring() {
    console.log('DPWRK Extension: Starting goals monitoring');
    checkForGoals();
    goalsCheckInterval = setInterval(checkForGoals, CHECK_INTERVAL);
}

async function checkForGoals() {
    try {
        const response = await fetch(SESSION_API_URL);
        if (response.ok) {
            const sessionData = await response.json();
            if (sessionData.active && sessionData.goals) {
                if (!isSessionActive || currentGoals !== sessionData.goals) {
                    console.log('✅ Session active:', sessionData.goals);
                    currentGoals = sessionData.goals;
                    isSessionActive = true;
                }
            } else {
                if (isSessionActive) {
                    console.log('❌ Session ended');
                    currentGoals = null;
                    isSessionActive = false;
                }
            }
        }
    } catch (error) {
        console.log('⚠️ Connection error, attempting to rediscover server...');

        // Try to rediscover the server port
        await discoverServerPort();

        if (isSessionActive) {
            currentGoals = null;
            isSessionActive = false;
        }
    }
}

// Block page
function blockPage(tabId) {
    const blockedPageUrl = browser.runtime.getURL('blocked.html');
    browser.tabs.update(tabId, { url: blockedPageUrl });
}

// Message listener
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openNewTab') {
        browser.tabs.create({ url: 'https://google.com' });
    }
});