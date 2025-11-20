'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 text-white animate-fade-in p-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* Error Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange/20 rounded-full blur-xl animate-pulse" />
          <div className="relative p-8 rounded-full bg-gradient-to-br from-red-500/10 to-orange/10 border-2 border-red-500/20 backdrop-blur-sm">
            <svg
              className="w-24 h-24 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-orange to-red-400 bg-clip-text text-transparent animate-slide-down">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-white/70 max-w-md mx-auto animate-slide-up">
            We encountered an unexpected error. Don&apos;t worry, we&apos;re on it!
          </p>
          {error.message && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
              <p className="text-sm text-red-300 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in-up delay-300">
          <Button
            onClick={reset}
            className="relative group bg-gradient-to-r from-red-500 to-orange hover:from-red-600 hover:to-orange/80 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </span>
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            className="px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-[#252A41] to-[#1a1f35] hover:from-[#2a3047] hover:to-[#1f2439] border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
