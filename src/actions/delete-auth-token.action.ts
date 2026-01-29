"use server";

import { AUTH_COOKIE_NAME } from "@/constants/configs";
import { cookies } from "next/headers";

export const deleteAuthToken = async () => {
	const cookieStore = await cookies();

	cookieStore.delete(AUTH_COOKIE_NAME);
};
