export { default } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware

// If no one is logged in and tries to enter URLS below, you will be redirected to /signin
export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*'],
}
