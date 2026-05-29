import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * PRX Startup OS Middleware
 * - Refreshes Supabase sessions
 * - Protects dashboard routes
 * - Detects org slugs and sets x-org-id headers for public pages
 */
export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // Create Supabase client for middleware with defensive cookie handlers
  let supabase: any = null;
  try {
    supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
      {
        cookies: {
          getAll() {
            try {
              return request.cookies.getAll();
            } catch {
              return [];
            }
          },
          setAll(cookiesToSet) {
            try {
              // Some runtimes don't allow mutating request.cookies — guard it
              cookiesToSet.forEach(({ name, value }) => {
                try {
                  // @ts-ignore
                  if (typeof request.cookies?.set === "function") {
                    // @ts-ignore
                    request.cookies.set(name, value);
                  }
                } catch (_) {}
              });
            } catch (_) {}

            // Ensure the response copies cookies so the browser receives them
            supabaseResponse = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) => {
              try {
                supabaseResponse.cookies.set(name, value, options);
              } catch (_) {}
            });
          },
        },
      }
    );
  } catch (err) {
    console.error("Supabase createServerClient error in middleware:", err);
    supabase = null;
  }

  // Refresh session (defensive) — if Supabase client fails, treat as unauthenticated
  let user: any = null;
  if (supabase) {
    try {
      const {
        data: { user: gotUser },
      } = await supabase.auth.getUser();
      user = gotUser;
    } catch (err) {
      console.error("Supabase auth.getUser() error in middleware:", err);
      user = null;
    }
  }

  const pathname = request.nextUrl.pathname;

  // ── Auth routes ────────────────────────────────────────────────────────────
  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/verify-phone");

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ── Static / public assets ─────────────────────────────────────────────────
  const isStaticRoute =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".");

  // ── Protected dashboard routes ─────────────────────────────────────────────
  const isDashboardRoute = pathname.startsWith("/dashboard");
  if (isDashboardRoute && !user) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // ── Org slug detection for public pages (/[orgSlug]) ──────────────────────
  const reservedPaths = [
    "login",
    "register",
    "verify-phone",
    "dashboard",
    "api",
    "_next",
    "favicon.ico",
    "admin",
  ];

  const segments = pathname.split("/").filter(Boolean);
  const potentialSlug = segments[0];

  if (
    potentialSlug &&
    !reservedPaths.includes(potentialSlug) &&
    !isStaticRoute
  ) {
    // Look up org by slug to inject x-org headers (guarded if Supabase client unavailable)
    if (supabase) {
      try {
        const { data: org } = await supabase
          .from("organizations")
          .select("id, accent_color, is_active")
          .eq("slug", potentialSlug)
          .single();

        if (org) {
          supabaseResponse.headers.set("x-org-id", org.id);
          supabaseResponse.headers.set(
            "x-org-accent",
            org.accent_color || "#FF5F1F"
          );
        }
      } catch (err) {
        console.error("Supabase org lookup failed in middleware:", err);
      }
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};