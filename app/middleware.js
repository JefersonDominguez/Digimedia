// middleware.js
export function middleware(request) {
  const token = request.cookies.get('token') || '';
  const isAuthenticated = !!token;

  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // Si intenta acceder al dashboard sin autenticación
  if (isDashboardRoute && !isAuthenticated) {
    return Response.redirect(new URL('/login', request.url));
  }

  // Si está autenticado e intenta acceder al login
  if (isAuthenticated && request.nextUrl.pathname === '/login') {
    return Response.redirect(new URL('/dashboard/main', request.url));
  }
}
export const config = {
  matcher: ['/dashboard/:path*', '/login']
}