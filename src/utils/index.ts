import { HttpClient } from "@/utils/http-client";
import { COMMON_API_URL, FOOD_API_URL } from "@/constants/configs";
import { UIInteractions } from "./ui-interactions";

export const utils = {
	foodApiClient: new HttpClient({
		baseUrl: FOOD_API_URL,
	}),
	commonApiClient: new HttpClient({
		baseUrl: COMMON_API_URL,
	}),
	uiInteractions: new UIInteractions(),
};

Object.freeze(utils);
