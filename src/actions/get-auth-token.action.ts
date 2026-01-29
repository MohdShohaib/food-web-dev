"use server";

import { AUTH_COOKIE_NAME } from "@/constants/configs";
import { cookies } from "next/headers";

interface Response {
	token: string | null;
}

export const getAuthToken = async (): Promise<Response> => {
	const cookieStore = await cookies();

	const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

	return {
		token: token ?? null,
	};
};
