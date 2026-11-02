import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Detects the visitor's language and serves "/" (English) or "/ar" (Arabic).
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next.js internals and files with an extension (images, icons…).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
