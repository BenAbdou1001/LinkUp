export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 text-white animate-fade-in">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Logo/Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-32 h-32 rounded-full border-4 border-white/10" />
          
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-blue border-r-purple animate-spin" />
          
          {/* Inner glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue/20 to-purple/20 backdrop-blur-sm animate-pulse" />
          </div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-sky animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-sky to-blue bg-clip-text text-transparent">
            Loading...
          </h2>
          <p className="text-sm text-white/60">Please wait while we prepare everything</p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-sky animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-purple animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Skeleton cards (optional visual feedback) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl px-6 mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-64 rounded-2xl bg-gradient-to-br from-sidenav-background to-sidenav-background/50 border border-white/5 animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5" />
              <div className="space-y-2">
                <div className="h-6 bg-white/5 rounded-lg w-3/4" />
                <div className="h-4 bg-white/5 rounded-lg w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
