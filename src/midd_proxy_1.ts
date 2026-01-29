import { NextRequest } from "next/server";
import {
	PROTECTED_MATCHERS,
	PROTECTED_ROUTES,
	UNPROTECTED_ROUTES,
} from "@/constants/routes";
import { LOGIN_URL, BASE_URL, AUTH_COOKIE_NAME } from "@/constants/configs";
import { NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
	const authCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
	const currentUrl = request.nextUrl.pathname;

	for (const matcher of PROTECTED_MATCHERS) {
		if (currentUrl.startsWith(matcher)) {
			if (!authCookie) {
				return NextResponse.redirect(
					new URL(LOGIN_URL, request.nextUrl.origin).toString()
				);
			}
		}
	}

	if (PROTECTED_ROUTES.has(currentUrl)) {
		if (!authCookie) {
			return NextResponse.redirect(
				new URL(LOGIN_URL, request.nextUrl.origin).toString()
			);
		}
	} else if (UNPROTECTED_ROUTES.has(currentUrl)) {
		if (authCookie) {
			return NextResponse.redirect(
				new URL(BASE_URL, request.nextUrl.origin).toString()
			);
		}
	}

	return NextResponse.next();
};

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico|onboard).*)",
	],
};
