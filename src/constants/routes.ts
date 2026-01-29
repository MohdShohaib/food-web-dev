export const PROTECTED_MATCHERS: string[] = [];

export const PROTECTED_ROUTES: Set<string> = new Set(["/", "/account"]);

export const UNPROTECTED_ROUTES: Set<string> = new Set(["/auth/login"]);
