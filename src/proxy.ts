import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//this function runs before a route is loaded
export function proxy(request: NextRequest) {
  //check if user try to access a protected route
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    //check for subabase auth cookie,
    //UPDATE THIS IN PRODUCTION, for mvp only
    const hasAuthCookie = request.cookies.has(
      "sb-hmmrorgkdatmieznrxwp-auth-token"
    );

    //if cookie is missing, send user to /login
    if (!hasAuthCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  //if they have the cookie, let them through
  return NextResponse.next();
}

// Specify the paths that should be protected by the middleware
export const config = {
  matcher: ["/dashboard/:path*"],
};
