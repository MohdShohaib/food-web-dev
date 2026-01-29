import { API_ROUTES } from "@/constants/api-routes";
import { JsonApiResponse } from "@/types/api";
import { UnauthorizedApiError } from "@/types/error";
import { utils } from "@/utils";
import { useMutation } from "@tanstack/react-query";

interface LoginRequestPayload {
	email: string;
	password: string;
}

interface ResponseData {
	token: string;
}

const login = async (payload: LoginRequestPayload) => {
	const { email, password } = payload;

	const response = await utils.foodApiClient.query<LoginRequestPayload>({
		path: API_ROUTES.AUTH.LOGIN.url,
		method: API_ROUTES.AUTH.LOGIN.method,
		body: {
			email,
			password,
		},
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

export const useLogin = () => {
	return useMutation({
		mutationFn: login,
		mutationKey: [API_ROUTES.AUTH.LOGIN.key],
	});
};
