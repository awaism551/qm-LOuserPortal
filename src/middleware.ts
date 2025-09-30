import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function detectPreferredLocale(header: string | null): 'en' | 'ar' {
  const source = header?.toLowerCase() || ''
  if (source.includes('ar')) return 'ar'
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle root path; let everything else pass through
  if (pathname === '/') {
    const locale = detectPreferredLocale(request.headers.get('accept-language'))
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}`
    // Rewrite serves the locale page content with 200 status instead of 3xx redirect
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
