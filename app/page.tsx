"use client";

import { Typewriter } from "@/app/typewriter-effect"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
                alt="DPWRK"
                className="w-8 h-8"
              />
              <h1 className="text-xl font-semibold text-black">DPWRK</h1>
            </div>
            <button 
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'https://github.com/MrStark-1234/DPWRK-releases/raw/main/DPWRK.dmg'
                link.download = 'DPWRK.dmg'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section className="pt-12 pb-32 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                    Distraction-free computing<br />across the internet
                  </h1>
                  
                  <p className="text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-lg">
                    Block around your goals, not just your time. DPWRK filters distractions inside websites so you keep the content you need—without the noise.
                  </p>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = 'https://github.com/MrStark-1234/DPWRK-releases/raw/main/DPWRK.dmg'
                      link.download = 'DPWRK.dmg'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-base"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Download for Mac
                  </button>
                  <p className="text-sm text-gray-500 font-normal"> Free • macOS 12.0+</p>
                </div>
              </div>

              {/* Right Video */}
              <div className="relative">
                <video 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-2xl shadow-xl"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <p className="text-lg font-light text-gray-600 leading-relaxed mt-6 text-center">
                  See DPWRK's intelligent blocking across websites like YouTube and Reddit based on user goals
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Problem Solution Section */}
      <section className="pt-20 pb-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left - Problem Card */}
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">🤯</span>
                </div>
                <h3 className="text-4xl font-bold text-black leading-tight h-20">
                  Focus apps are<br />f***ing chaotic
                </h3>
              </div>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✗</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">Block entire websites when you need specific content</p>
                </div>
                
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✗</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">Force rigid time blocks instead of flexible sessions</p>
                </div>
                
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✗</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">No understanding of context or what you actually need</p>
                </div>
              </div>
            </div>

            {/* Right - Solution Card */}
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group">
              <div className="mb-8">
                <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
                    alt="DPWRK"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-4xl font-bold text-black leading-tight h-20">
                  DPWRK turns<br />chaos into <span className="text-orange-500">clarity</span>
                </h3>
              </div>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">Filter distractions while keeping useful content</p>
                </div>
                
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">AI understands your goals and protects your focus</p>
                </div>
                
                <div className="flex items-start gap-4 min-h-[3rem]">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-800 font-medium leading-snug">Smart blocking that adapts to what you need</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="pt-24 pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Privacy First
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Your data, <span className="text-orange-500">your control</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built with privacy as the foundation, not an afterthought. Every design decision prioritizes your digital autonomy.
            </p>
          </div>
          
          {/* Main Features */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Local Processing */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Local Processing</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">Everything runs on your Mac. No data leaves your device, ever.</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                100% on-device AI
              </div>
            </div>

            {/* User-Owned AI */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">User-Owned AI</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">Bring your own Gemini API key. You control the AI, not us.</p>
              <div className="flex items-center text-orange-600 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Your API, your rules
              </div>
            </div>

            {/* Zero Tracking */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 21l-6.364-6.364M12 21l6.364-6.364M12 21V9m6.364 9.364L21 12l-6.364-6.364M21 12H9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Zero Tracking</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">No analytics, no telemetry, no behavioral profiling. Period.</p>
              <div className="flex items-center text-green-600 font-medium">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Tracking-free guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="pt-20 pb-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Quick Setup
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Get started in under 2 minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Download includes a Safari extension. Chrome and Chromium support coming soon.
            </p>
          </div>
          
          {/* Video First */}
          <div className="mb-16">
            <div className="max-w-xl mx-auto">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg"
              >
                <source src="/setup-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <p className="text-lg font-light text-gray-600 leading-relaxed mt-6 text-center">
                Watch the complete setup process in action
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Download & Install</h3>
              <p className="text-gray-600 leading-relaxed">Download DPWRK from the DMG file and complete installation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Open Extensions</h3>
              <p className="text-gray-600 leading-relaxed">Navigate to Safari → Preferences → Extensions</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Enable DPWRK</h3>
              <p className="text-gray-600 leading-relaxed">Find DPWRK and enable it with necessary permissions</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Set Goals</h3>
              <p className="text-gray-600 leading-relaxed">Configure your focus goals and start distraction-free browsing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
              alt="DPWRK"
              className="w-6 h-6"
            />
            <span className="text-gray-600 font-light">DPWRK</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 font-light">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 font-light">
              Support
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 font-light">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}