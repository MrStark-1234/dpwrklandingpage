"use client"

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
          <section className="pt-12 pb-20 min-h-[80vh] flex items-center">
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
                  <p className="text-sm text-gray-500 font-normal">Free • macOS 12.0+</p>
                </div>
              </div>

              {/* Right Video */}
              <div className="relative">
                <video 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-xl shadow-2xl"
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