import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('user')?.value

  if (!token) {
    const redirectURL = new URL('/login', request.url)

    return NextResponse.redirect(redirectURL)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/equipamentos/:path*'],
}
