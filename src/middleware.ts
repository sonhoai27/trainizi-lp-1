import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./libs/i18nNavigation";

const intlMiddleware = createMiddleware(routing);

export default function middleware(
  request: NextRequest,
) {
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pages including the root
    '/',

    // Match all paths except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
