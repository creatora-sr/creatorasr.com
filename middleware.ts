import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = (req.auth?.user as { role?: string } | undefined)?.role;
  if (pathname.startsWith("/admin")) {
    if (!req.auth || role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login?from=admin", req.url));
    }
  }
  if (pathname.startsWith("/client") || pathname.startsWith("/dashboard")) {
    if (!req.auth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/client/:path*", "/dashboard/:path*"],
};
