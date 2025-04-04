import { type NextRequest, NextResponse } from 'next/server';
import { checkAuthorization } from './lib/server-utils';

export async function middleware(req: NextRequest) {
  const isAuthorized = checkAuthorization(req);

  // Jeżeli prawdą jest że użytkownik nie jest autoryzowany, to zwraca nam pole do wpisywania loginu i hasła. Natomiast jeżeli użytkownik jest autoryzowany, to zwraca nam stronę, na którą chcemy przejść. W tym przypadku jest to strona /admin.
  if (!isAuthorized) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }
}

export const config = {
  matcher: '/admin/:path*',
};
