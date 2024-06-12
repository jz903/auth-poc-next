import { NextRequest } from "next/server";
import { getSession, updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (session && !request.nextUrl.pathname.startsWith("/dashboard")) {
    await updateSession(request);
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!session && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
