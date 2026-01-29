export const API_ROUTES = {
	AUTH: {
		LOGIN: {
			url: `/auth/login`,
			method: "POST",
			key: "LOGIN",
		},
		SEND_OTP: {
			url: `/auth/send-otp`,
			method: "POST",
			key: "SEND_OTP",
		},
		RESEND_OTP: {
			url: `/auth/resend-otp`,
			method: "POST",
			key: "RESEND_OTP",
		},
		VERIFY_OTP: {
			url: `/auth/verify-otp`,
			method: "POST",
			key: "VERIFY_OTP",
		},
	},
	ACCOUNT: {
		GET_MY_ACCOUNT: {
			url: `/account/me`,
			method: "GET",
			key: "GET_MY_ACCOUNT",
		},
		UPDATE_MY_ACCOUNT: {
			url: `/account`,
			method: "PUT",
			key: "UPDATE_MY_ACCOUNT",
		},
		RESEND_UPDATE_MY_ACCOUNT_OTP: {
			url: `/account/resend-otp`,
			method: "PATCH",
			key: "RESEND_UPDATE_MY_ACCOUNT_OTP",
		},
		CONFIRM_UPDATE_ACCOUNT: {
			url: `/account/confirm`,
			method: "PATCH",
			key: "CONFIRM_UPDATE_ACCOUNT",
		},
	},
	SUPPORT: {
		GET_SUPPORT_CATEGORIES: {
			url: `/support/category`,
			method: "GET",
			key: "SUPPORT_CATEGORIES",
		},
		GET_SUPPORT_QUESTIONS: {
			url: `/support/faq`,
			method: "GET",
			key: "SUPPORT_QUESTIONS",
		},
	},
	EMPLOYEE: {
		CREATE_EMPLOYEE: {
			url: `/employee`,
			method: "POST",
			key: "CRATE_EMPLOYEE",
		},
		GET_EMPLOYEE: {
			url: `/employee`,
			method: "GET",
			key: "GET_EMPLOYEE",
		},
		SUSPEND_EMPLOYEE: {
			url: `/employee/suspend`,
			method: "PATCH",
			key: "SUSPEND_EMPLOYEE",
		},
		REACTIVATE_EMPLOYEE: {
			url: `/employee/reactivate`,
			method: "PATCH",
			key: "REACTIVATE_EMPLOYEE",
		},
		DELETE_EMPLOYEE: {
			url: `/employee`,
			method: "DELETE",
			key: "DELETE_EMPLOYEE",
		},
	},
	COMMON: {
		GET_CONFIG: {
			url: `/config`,
			method: "GET",
			key: "GET_CONFIG",
		},
	},
} as const;
