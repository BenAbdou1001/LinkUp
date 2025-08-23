import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define your protected routes
const isProtectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
])

export default clerkMiddleware(async (auth, req) => {
  // Check if the current route is protected
  if (isProtectedRoute(req)) {
    // Protect the route - this will redirect to sign-in if user is not authenticated
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}