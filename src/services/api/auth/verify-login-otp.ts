import { API_ROUTES } from "@/constants/api-routes";
import { JsonApiResponse } from "@/types/api";
import { UnauthorizedApiError } from "@/types/error";
import { utils } from "@/utils";
import { useMutation } from "@tanstack/react-query";

interface VerifyLoginOtpPayload {
	email: string;
	otp: string;
}

interface ResponseData {
	token: string;
}

const verifyLoginOtp = async (args: VerifyLoginOtpPayload) => {
	const response = await utils.foodApiClient.query<VerifyLoginOtpPayload>({
		path: API_ROUTES.AUTH.VERIFY_OTP.url,
		method: API_ROUTES.AUTH.VERIFY_OTP.method,
		body: args,
	});

	if (response.status === 401 || response.status === 403) {
		throw new UnauthorizedApiError(response.status);
	}

	const responseData =
		(await response.json()) as JsonApiResponse<ResponseData>;

	if (!responseData.success) {
		throw new Error(responseData.error);
	}

	if (!responseData.data) {
		throw new Error("Something went wrong!");
	}

	return responseData.data;
};

export const useVerifyLoginOtp = () => {
	return useMutation({
		mutationFn: verifyLoginOtp,
		mutationKey: [API_ROUTES.AUTH.VERIFY_OTP.key],
	});
};
