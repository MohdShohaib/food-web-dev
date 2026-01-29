import { API_ROUTES } from "@/constants/api-routes";
import { useAuthTokenStore } from "@/store";
import { JsonApiResponse } from "@/types/api";
import { UnauthorizedApiError } from "@/types/error";
import { EmployeeUser, SuperAdminUser } from "@/types/models";
import { utils } from "@/utils";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

type ResponseData =
	| ({
			role: "super_admin";
	  } & {
			employee: SuperAdminUser;
	  })
	| ({
			role: "manager" | "delivery";
	  } & {
			employee: EmployeeUser;
	  });

const getMyAccount = async (args: QueryFunctionContext) => {
	const { queryKey } = args;

	const [, token] = queryKey;

	const response = await utils.foodApiClient.query({
		path: API_ROUTES.ACCOUNT.GET_MY_ACCOUNT.url,
		method: API_ROUTES.ACCOUNT.GET_MY_ACCOUNT.method,
		authorized: true,
		authToken: token as string,
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
		throw new Error("Something went wrong while fetching your account!");
	}

	return responseData.data;
};

export const useGetMyAccount = () => {
	const { authToken } = useAuthTokenStore();

	return useQuery({
		queryKey: [API_ROUTES.ACCOUNT.GET_MY_ACCOUNT.key, authToken],
		queryFn: getMyAccount,
		enabled: !!authToken,
	});
};
