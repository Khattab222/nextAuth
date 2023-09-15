import { NextResponse } from 'next/server'
 

export function middleware(request) {

    const path = request.nextUrl.pathname;
    const isPublickpath = path ==='/login' || path === '/signup';

    const token = request.cookies.get('token') || ''

  
    if (isPublickpath && token) {
        return NextResponse.redirect(new URL ('/profile',request.nextUrl))
    }
 
    if (!isPublickpath && !token) {
        return NextResponse.redirect(new URL ('/signup',request.nextUrl))
    }



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ]
}