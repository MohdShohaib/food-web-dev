"use server";

import {
	AUTH_COOKIE_MAX_AGE_MILLISECONDS,
	AUTH_COOKIE_MIN_AGE_MILLISECONDS,
	AUTH_COOKIE_NAME,
} from "@/constants/configs";
import { ENV } from "@/constants/env";
import { cookies } from "next/headers";

interface Args {
	token: string;
	rememberMe?: boolean;
}

export const saveAuthToken = async (args: Args) => {
	const { token, rememberMe } = args;

	const cookieStore = await cookies();

	cookieStore.set(AUTH_COOKIE_NAME, token, {
		httpOnly: true,
		expires:
			Date.now() +
			(rememberMe
				? AUTH_COOKIE_MAX_AGE_MILLISECONDS
				: AUTH_COOKIE_MIN_AGE_MILLISECONDS),
		secure: ENV === "production",
	});
};
