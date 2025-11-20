import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 text-white animate-fade-in p-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative">
            <h1 className="text-[180px] md:text-[240px] font-black bg-gradient-to-r from-purple via-blue to-sky bg-clip-text text-transparent leading-none animate-scale-in">
              404
            </h1>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-sky bg-clip-text text-transparent">
            Page Not Found
          </h2>
          <p className="text-lg text-white/70 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Illustration/Icon */}
        <div className="my-8 animate-fade-in-up delay-300">
          <div className="p-6 rounded-full bg-gradient-to-br from-purple/10 to-blue/10 border-2 border-white/10 backdrop-blur-sm">
            <svg
              className="w-20 h-20 text-sky"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center animate-fade-in-up delay-500">
          <Link href="/">
            <Button className="relative group bg-gradient-to-r from-blue to-purple hover:from-blue/90 hover:to-purple/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-xl hover:shadow-blue/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </span>
            </Button>
          </Link>
          <Link href="/previous">
            <Button className="px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-[#252A41] to-[#1a1f35] hover:from-[#2a3047] hover:to-[#1f2439] border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Meetings
              </span>
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm animate-fade-in-up delay-700">
          <p className="text-sm text-white/60">
            If you believe this is an error, please{' '}
            <a href="mailto:support@linkup.com" className="text-blue hover:text-sky transition-colors duration-200 underline">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
