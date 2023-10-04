import { type NextRequest, NextResponse } from "next/server";

const locales = ["de", "en"] as const;

export const config = {
  matcher: ["/", `/(${locales.join("|")})/:path*`],
  // matcher: ["/", ...locales.map(locale => `/${locale}/:path*`)],
};

export default function middleware(request: NextRequest) {
  return NextResponse.next();
}
