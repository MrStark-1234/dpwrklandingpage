"use client";

import { useState } from 'react'
import { saveEmail } from '@/lib/supabase'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function EmailModal({ isOpen, onClose, onSuccess }: EmailModalProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError('Email is required')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError('')

    const result = await saveEmail(email)

    if (result.success) {
      onSuccess()
      onClose()
      setEmail('')
    } else {
      setError(result.error || 'Failed to save email')
    }

    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative max-w-md w-full transform rotate-1 transition-transform hover:rotate-0 duration-300">

        {/* Tape Effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/90 rotate-2 shadow-sm border border-yellow-200/50 z-20"></div>

        {/* Creative Sticker */}
        <div className="absolute -top-6 -right-6 z-20 transform rotate-12 hidden md:block">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-marker text-lg shadow-lg border-2 border-white transform hover:scale-110 transition-transform">
            It's Free!
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-white relative overflow-hidden">

          {/* Background Doodle */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M10 10 C 40 40, 60 10, 90 40" strokeWidth="2" />
              <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          <div className="text-center mb-8 relative z-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
              alt="DPWRK"
              className="w-16 h-16 mx-auto mb-4 drop-shadow-md"
            />
            <h2 className="text-3xl font-marker text-foreground mb-2 transform -rotate-1">Get DPWRK Now</h2>
            <p className="text-muted-foreground text-lg">Enter your email to start your distraction-free journey.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-5 py-4 bg-secondary/30 border-2 border-transparent focus:border-primary/50 rounded-xl outline-none transition-all text-lg placeholder:text-muted-foreground/50 font-medium"
                disabled={loading}
              />
              {error && (
                <p className="text-destructive font-bold text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">×</span> {error}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 border-2 border-border text-muted-foreground rounded-xl hover:bg-secondary/50 transition-colors duration-200 font-bold"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Download'}
              </button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground/60 text-center mt-6 font-medium">
            We respect your inbox. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  )
}