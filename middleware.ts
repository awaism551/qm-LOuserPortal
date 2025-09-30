import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function detectPreferredLocale(header: string | null): 'en' | 'ar' {
  const source = header?.toLowerCase() || ''
  if (source.includes('ar')) return 'ar'
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const locale = detectPreferredLocale(request.headers.get('accept-language'))
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
