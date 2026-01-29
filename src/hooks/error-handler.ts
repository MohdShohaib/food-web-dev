"use client";

import { useRouter } from "next/navigation";
// import { useAuthStateStore } from "@/store";
import { showError } from "@/components/ui/toast";
import { DASHBOARD_BASE_PATH, LOGIN_PAGE_PATH } from "@/constants/configs";
import { UnauthorizedApiError } from "@/types/error";

type ErrorHandlerFunc = (error: Error) => void;

export const useAPIErrorHandler = () => {
	const router = useRouter();
	// const { setIsAuthenticated } = useAuthStateStore();

	//TODO: Remove auth token from here for preventing infinite load

	const protectedAPIErrorHandler =
		(customHandler?: ErrorHandlerFunc) => (error: unknown) => {
			if (error instanceof Error) {
				if (error instanceof UnauthorizedApiError) {
					showError(error.message);
					// setIsAuthenticated(false);
					router.replace(LOGIN_PAGE_PATH);
					return;
				}

				if (customHandler) {
					customHandler(error);
					return;
				}

				showError(error.message);
				return;
			}

			showError("Some Error Occurred!");
		};

	const unprotectedAPIErrorHandler =
		(customHandler?: ErrorHandlerFunc) => (error: unknown) => {
			if (error instanceof Error) {
				if (error.message === "401") {
					showError("You are already authenticated!");
					// setIsAuthenticated(true);
					router.replace(DASHBOARD_BASE_PATH);
					return;
				}

				if (customHandler) {
					customHandler(error);
					return;
				}

				showError(error.message);
				return;
			}

			showError("Some Error Occurred!");
		};

	const APIErrorHandler =
		(customHandler?: ErrorHandlerFunc) => (error: unknown) => {
			if (error instanceof Error) {
				if (customHandler) {
					customHandler(error);
					return;
				}

				showError(error.message);
				return;
			}

			showError("Some Error Occurred!");
		};

	return {
		protectedAPIErrorHandler,
		unprotectedAPIErrorHandler,
		APIErrorHandler,
	};
};
