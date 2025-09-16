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
              where did the{" "}
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
              <button className="inline-flex items-center justify-center gap-3 text-white hover:text-gray-300 transition-colors duration-200 text-xl font-light border-b border-gray-700 hover:border-gray-500 pb-2">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Download for Mac</span>
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
