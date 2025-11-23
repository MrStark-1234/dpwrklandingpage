"use client";

import { useState } from 'react'
import { Typewriter } from "@/app/typewriter-effect"
import EmailModal from '@/components/EmailModal'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/MrStark-1234/DPWRK-releases/raw/main/DPWRK.dmg'
    link.download = 'DPWRK.dmg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmailSuccess = () => {
    handleDownload()
  }

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden text-foreground">
      {/* Header */}
      <header className="px-6 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
              alt="DPWRK"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold tracking-tight text-foreground font-sans font-bold tracking-tight">DPWRK</span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base">About</a>
            <a href="#privacy" className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base">Privacy</a>
            <a href="#setup" className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base">Setup</a>
          </nav>

          {/* Right: Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-foreground hover:text-primary font-medium text-base hidden sm:block"
            >
              Sign in
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 font-bold text-base px-5 py-2 rounded-full"
            >
              Try it free
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      < main className="px-6" >
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <section className="py-20 lg:py-32 text-center relative">

            {/* Background Doodles */}
            <div className="absolute top-20 left-10 opacity-10 pointer-events-none hidden lg:block">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-foreground">
                <path d="M10 10 C 40 40, 60 10, 90 40" strokeWidth="2" />
                <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="5 5" />
              </svg>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] font-sans font-bold tracking-tight mb-8 relative z-10">
              <span className="relative inline-block">
                Distraction-free
                {/* Creative Underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> computing<br className="hidden lg:block" /> across the internet.
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 font-light">
              Block around your goals, not just your time. DPWRK filters distractions inside websites so you keep the content you need—without the noise.
            </p>

            <div className="flex flex-col items-center gap-6 relative z-20">
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Download for Mac
                </button>

                {/* Creative Arrow & Text */}
                <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 hidden md:block rotate-6">
                  <span className="font-marker text-foreground/60 text-lg block mb-1">It's free!</span>
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-foreground/40 -ml-4">
                    <path d="M50 5 C 40 20, 20 20, 5 25 M 5 25 L 15 18 M 5 25 L 15 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <p className="text-base text-muted-foreground">Free • macOS 12.0+</p>

              {/* Product Hunt Badge */}
              <div className="pt-8">
                <a
                  href="https://www.producthunt.com/products/dpwrk?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-deepwork&#0045;dpwrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1020573&theme=light&t=1759220653041"
                    alt="Deepwork (DPWRK) - Smarter than a blocker: filters distractions, not sites | Product Hunt"
                    className="w-[250px] h-[54px]"
                  />
                </a>
              </div>
            </div>

            {/* Video with Tape & Rotation */}
            <div className="mt-24 relative w-full max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black transform -rotate-1 hover:rotate-0 transition-transform duration-500 group">
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rotate-1 z-10 shadow-sm"></div>

                <video
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20at%2011.41.05%E2%80%AFPM-w8k2r0j0j0j0j0j0j0j0j0j0j0j0j0.png"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute -bottom-8 -right-4 md:-right-12 transform rotate-3 hidden md:block">
                <span className="font-marker text-2xl text-foreground/60">See it in action</span>
                <svg className="w-12 h-12 absolute -top-8 -left-8 text-foreground/20 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <path d="M10 10 C 30 50, 70 50, 90 90" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>

        </div>
      </main >

      {/* Problem Solution Section */}
      <section id="about" className="py-24 bg-secondary/30 border-y border-border/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center relative">

            {/* Creative Arrow (Hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground/20 rotate-12">
                <path d="M5 20C20 20 40 10 90 20M90 20L80 10M90 20L80 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Left - The Old Way */}
            <div className="w-full md:w-1/2 max-w-md bg-muted/50 p-8 rounded-3xl transform -rotate-1 border border-border/50 relative group hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 bg-white border border-border px-4 py-2 rounded-lg shadow-sm transform -rotate-3">
                <span className="font-marker text-xl text-muted-foreground">The Old Way</span>
              </div>
              <h3 className="text-3xl font-sans font-bold tracking-tight text-muted-foreground mb-8 mt-4 line-through decoration-2 decoration-red-400/50">
                Focus apps are chaotic.
              </h3>
              <ul className="space-y-6 opacity-70">
                <li className="flex gap-4 items-start">
                  <span className="text-muted-foreground text-2xl font-marker leading-none">NO</span>
                  <p className="text-lg text-muted-foreground leading-relaxed">Blocking entire sites when you need specific content.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-muted-foreground text-2xl font-marker leading-none">NO</span>
                  <p className="text-lg text-muted-foreground leading-relaxed">Rigid time blocks that kill your flow.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-muted-foreground text-2xl font-marker leading-none">NO</span>
                  <p className="text-lg text-muted-foreground leading-relaxed">Dumb blocking that hides helpful resources.</p>
                </li>
              </ul>
            </div>

            {/* Right - The DPWRK Way */}
            <div className="w-full md:w-1/2 max-w-md bg-background p-8 rounded-3xl transform rotate-1 border-2 border-primary/20 shadow-xl relative group hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-5 -right-4 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg transform rotate-2">
                <span className="font-marker text-xl">The DPWRK Way</span>
              </div>
              <h3 className="text-3xl font-sans font-bold tracking-tight text-foreground mb-8 mt-4">
                DPWRK brings clarity.
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="text-primary text-2xl font-bold leading-none">✓</span>
                  <p className="text-lg text-foreground leading-relaxed font-medium">Filters distractions, keeps the content.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary text-2xl font-bold leading-none">✓</span>
                  <p className="text-lg text-foreground leading-relaxed font-medium">AI adapts to your goals instantly.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary text-2xl font-bold leading-none">✓</span>
                  <p className="text-lg text-foreground leading-relaxed font-medium">Smart blocking that understands context.</p>
                </li>
              </ul>
              <div className="absolute -bottom-6 right-8 transform rotate-3">
                <span className="font-marker text-2xl text-primary">Much better!</span>
                <svg className="w-12 h-12 absolute -bottom-8 -right-4 text-primary/30 -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <path d="M10 10 C 30 50, 70 50, 90 90" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Creative Elements Background */}
          <div className="absolute top-0 right-0 md:right-20 transform rotate-12 opacity-10 pointer-events-none">
            <span className="font-marker text-[200px] leading-none text-primary">?</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left: Manifesto Header */}
            <div className="lg:col-span-4 space-y-8 relative">
              <div className="relative inline-block">
                <span className="font-marker text-primary text-xl mb-2 block -rotate-2">The Privacy Pledge</span>
                <h2 className="text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[0.9]">
                  Your data.<br />
                  Your device.<br />
                  <span className="text-muted-foreground">Period.</span>
                </h2>
                {/* Stamp */}
                <div className="absolute -right-8 -top-8 md:-right-12 md:-top-12 transform rotate-12 z-20 opacity-90">
                  <div className="border-4 border-primary rounded-full w-28 h-28 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <span className="font-marker text-primary text-lg font-bold text-center leading-tight -rotate-12">
                      100%<br />PRIVATE
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe privacy is a fundamental right. DPWRK is built to work for you, not to sell you.
              </p>

              {/* Signature */}
              <div className="pt-8 border-t border-border mt-8">
                <div className="font-marker text-2xl text-foreground/60 rotate-[-2deg]">
                  The DPWRK Team
                </div>
              </div>
            </div>

            {/* Right: 3 Columns with Dividers */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-8 md:gap-0">

              {/* Item 1 */}
              <div className="md:px-8 md:border-r border-border/60 space-y-4">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-sans font-bold tracking-tight text-foreground">Local First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data stays on your device. We don't see your browsing history. It never leaves your Mac.
                </p>
              </div>

              {/* Item 2 */}
              <div className="md:px-8 md:border-r border-border/60 space-y-4">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-sans font-bold tracking-tight text-foreground">Zero Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No analytics pixel. No behavior tracking. No selling data. You are not the product.
                </p>
              </div>

              {/* Item 3 */}
              <div className="md:px-8 space-y-4">
                <div className="text-4xl mb-4">🔓</div>
                <h3 className="text-xl font-sans font-bold tracking-tight text-foreground">Open Source</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our core blocking engine is open for anyone to audit. Trust through transparency.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-24 bg-secondary/30 border-t border-border/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <div className="text-center mb-16 relative">
            <span className="font-marker text-2xl text-primary absolute -top-8 right-1/3 rotate-12 hidden md:block">It's actually this easy!</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-sans font-bold tracking-tight text-foreground mb-6">
              Get started in minutes.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No complex configuration. Just install and go.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Video "Polaroid" */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-white rounded-xl shadow-xl rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500"></div>
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full"
                >
                  <source src="/setup-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Tape */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 rotate-2 shadow-sm border border-yellow-200/50 z-10"></div>

              {/* Caption */}
              <div className="absolute -bottom-12 left-10 transform -rotate-2">
                <span className="font-marker text-muted-foreground text-xl">The Setup Flow</span>
                <svg className="w-8 h-8 absolute -top-4 -right-8 text-muted-foreground/50" viewBox="0 0 50 50" fill="none" stroke="currentColor">
                  <path d="M10 40 Q 25 10 40 40" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Right: Steps Timeline */}
            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border border-l-2 border-dashed border-primary/30"></div>

              {[
                { step: 1, title: "Download", desc: "Get the lightweight DMG file for macOS." },
                { step: 2, title: "Extensions", desc: "Open Safari Preferences > Extensions." },
                { step: 3, title: "Enable", desc: "Tick the box to enable DPWRK." },
                { step: 4, title: "Focus", desc: "That's it. You're ready to flow." },
              ].map((item, index) => (
                <div key={item.step} className="relative pl-20 group">
                  {/* Number Circle */}
                  <div className={`absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center bg-background z-10 transition-transform group-hover:scale-110 ${index === 3 ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'}`}>
                    <span className="font-marker text-xl">{item.step}</span>
                  </div>

                  <h3 className="text-2xl font-sans font-bold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      < footer className="py-12 border-t border-border" >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
              alt="DPWRK"
              className="w-6 h-6 grayscale opacity-50"
            />
            <span className="text-muted-foreground font-medium">DPWRK</span>
          </div>
          <div className="flex gap-8 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </footer >

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleEmailSuccess}
      />
    </div >
  )
}