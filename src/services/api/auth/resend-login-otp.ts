import { API_ROUTES } from "@/constants/api-routes";
import { JsonApiResponse } from "@/types/api";
import { UnauthorizedApiError } from "@/types/error";
import { utils } from "@/utils";
import { useMutation } from "@tanstack/react-query";

interface ResendLoginOtpPayload {
	email: string;
}

const resendLoginOtp = async (args: ResendLoginOtpPayload) => {
	const response = await utils.foodApiClient.query<ResendLoginOtpPayload>({
		path: API_ROUTES.AUTH.RESEND_OTP.url,
		method: API_ROUTES.AUTH.RESEND_OTP.method,
		body: args,
	});

	if (response.status === 401 || response.status === 403) {
		throw new UnauthorizedApiError(response.status);
	}

	const responseData = (await response.json()) as JsonApiResponse;

	if (!responseData.success) {
		throw new Error(responseData.error);
	}

	return true;
};

export const useResendLoginOtp = () => {
	return useMutation({
		mutationFn: resendLoginOtp,
		mutationKey: [API_ROUTES.AUTH.RESEND_OTP.key],
	});
};
