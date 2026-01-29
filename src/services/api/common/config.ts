import { Config } from "@/types/models";
import { utils } from "@/utils";
import { API_ROUTES } from "@/constants/api-routes";
import { JsonApiResponse } from "@/types/api/json-api-response";
import { useQuery } from "@tanstack/react-query";

interface ResponseData {
	configs: Config[];
}

const getConfig = async () => {
	const response = await utils.commonApiClient.query({
		path: API_ROUTES.COMMON.GET_CONFIG.url,
		method: API_ROUTES.COMMON.GET_CONFIG.method,
	});

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

export const useGetConfig = () => {
	return useQuery({
		queryKey: [API_ROUTES.COMMON.GET_CONFIG.key],
		queryFn: getConfig,
	});
};
