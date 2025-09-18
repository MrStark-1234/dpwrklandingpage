"use client"

import { Typewriter } from "@/app/typewriter-effect"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#333333" }}>
      {/* Minimal Header */}
      <header className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white tracking-wide">DPWRK</h1>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          {/* App Icon */}
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
              alt="DPWRK"
              className="w-32 h-32"
            />
          </div>

          {/* Main Question */}
          <div className="space-y-10">
            <h2 className="text-5xl md:text-3xl lg:text-5xl font-mono text-white leading-tight">
              where did your{" "}
              <span
                className="font-serif font-bold italic hover:animate-pulse cursor-pointer transition-all duration-300 hover:font-sans hover:not-italic hover:font-normal"
                style={{
                  animation: "fontCycle 2s infinite paused",
                }}
                onMouseEnter={(e) => {
                  e.target.style.animationPlayState = "running"
                }}
                onMouseLeave={(e) => {
                  e.target.style.animationPlayState = "paused"
                  e.target.style.fontFamily = ""
                }}
              >
                focus
              </span>{" "}
              go?
            </h2>

            <div className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
              <Typewriter
                text={["Your Mac. Without the noise.", "Focus. Redefined.", "Distraction-free computing."]}
                speed={100}
                loop={true}
                className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed"
              />
            </div>
          </div>

          {/* Subtle CTA */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = 'https://github.com/MrStark-1234/DPWRK-releases/raw/main/DPWRK.dmg'
                  link.download = 'DPWRK.dmg'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="inline-flex items-baseline justify-center gap-3 text-white hover:text-gray-300 transition-colors duration-200 text-xl font-light border-b border-gray-700 hover:border-gray-500 pb-2"
              >
                <svg className="w-6 h-6 flex-shrink-0 translate-y-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="leading-tight">Download for Mac</span>
              </button>
            </div>
            <p className="text-base text-gray-500 font-light">Free • macOS 12.0+</p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-10 text-base text-gray-500 font-light">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              About
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Support
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fontCycle {
          0% { font-family: 'Times New Roman', serif; }
          16% { font-family: 'Arial', sans-serif; }
          32% { font-family: 'Courier New', monospace; }
          48% { font-family: 'Georgia', serif; }
          64% { font-family: 'Helvetica', sans-serif; }
          80% { font-family: 'Monaco', monospace; }
          100% { font-family: 'Times New Roman', serif; }
        }
      `}</style>
    </div>
  )
}
