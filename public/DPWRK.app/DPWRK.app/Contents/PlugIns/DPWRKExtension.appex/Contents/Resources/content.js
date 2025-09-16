// DPWRK Safari Extension Content Script
console.log('DPWRK Extension: Content script loaded on', window.location.href);

// Listen for messages from background script
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('DPWRK Extension: Content script received message:', request);
    
    if (request.action === 'analyzePage') {
        analyzePage(request.goals, request.tabId);
    }
});

// Analyze the current page content
async function analyzePage(goals, tabId) {
    try {
        // Skip if no goals or already on blocked page
        if (!goals || window.location.href.includes('blocked.html')) {
            return;
        }
        
        console.log('DPWRK Extension: Analyzing page with goals:', goals);
        
        // Extract page content
        const title = document.title || '';
        const bodyText = extractBodyText();
        
        // Skip if no meaningful content
        if (!title && !bodyText) {
            console.log('DPWRK Extension: No content to analyze');
            return;
        }
        
        // Send content for classification
        const classificationData = {
            title: title,
            body: bodyText,
            goals: goals
        };
        
        console.log('DPWRK Extension: Sending content for classification');
        
        // Request classification from background script
        browser.runtime.sendMessage({
            action: 'classifyContent',
            data: classificationData
        }).then(result => {
            console.log('DPWRK Extension: Classification result:', result);
            
            if (!result.allowed) {
                console.log('DPWRK Extension: Content blocked, redirecting');
                // Request page block
                browser.runtime.sendMessage({
                    action: 'blockPage'
                });
            }
        }).catch(error => {
            console.error('DPWRK Extension: Classification request failed:', error);
        });
        
    } catch (error) {
        console.error('DPWRK Extension: Error analyzing page:', error);
    }
}

// Extract meaningful text content from the page
function extractBodyText() {
    try {
        // Remove script and style elements
        const elementsToRemove = document.querySelectorAll('script, style, nav, header, footer, aside');
        const clonedDoc = document.cloneNode(true);
        
        // Remove unwanted elements from clone
        clonedDoc.querySelectorAll('script, style, nav, header, footer, aside').forEach(el => el.remove());
        
        // Get text content from main content areas
        let bodyText = '';
        
        // Try to find main content areas
        const mainSelectors = [
            'main',
            '[role="main"]',
            '.main-content',
            '.content',
            '.post-content',
            '.article-content',
            'article',
            '.entry-content'
        ];
        
        for (const selector of mainSelectors) {
            const mainElement = clonedDoc.querySelector(selector);
            if (mainElement) {
                bodyText = mainElement.textContent || mainElement.innerText || '';
                break;
            }
        }
        
        // Fallback to body if no main content found
        if (!bodyText) {
            bodyText = clonedDoc.body ? (clonedDoc.body.textContent || clonedDoc.body.innerText || '') : '';
        }
        
        // Clean up the text
        bodyText = bodyText
            .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
            .replace(/\n+/g, ' ') // Replace newlines with space
            .trim();
        
        // Limit to first 4000 characters
        if (bodyText.length > 4000) {
            bodyText = bodyText.substring(0, 4000);
        }
        
        console.log('DPWRK Extension: Extracted body text length:', bodyText.length);
        return bodyText;
        
    } catch (error) {
        console.error('DPWRK Extension: Error extracting body text:', error);
        return '';
    }
}
