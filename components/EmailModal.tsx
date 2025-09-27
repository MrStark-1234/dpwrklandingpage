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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024x1024-AUE4NNQsn1jNa8m186wUDGRiL8r8DB.png"
            alt="DPWRK"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-black mb-2">Get DPWRK</h2>
          <p className="text-gray-600">Enter your email to download DPWRK for Mac</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              disabled={loading}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Downloading...' : 'Download'}
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          We'll only use your email to send important updates about DPWRK
        </p>
      </div>
    </div>
  )
}