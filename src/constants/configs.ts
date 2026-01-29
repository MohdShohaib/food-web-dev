import { HOST, NEXT_PUBLIC_API_BASE_URL } from "./env";

export const FOOD_API_URL = `${NEXT_PUBLIC_API_BASE_URL}/food`;
export const COMMON_API_URL = `${NEXT_PUBLIC_API_BASE_URL}/common`;

export const AUTH_COOKIE_NAME = "grubpac-food-auth";
export const AUTH_COOKIE_MAX_AGE_MILLISECONDS = 1000 * 60 * 60 * 24 * 90;
export const AUTH_COOKIE_MIN_AGE_MILLISECONDS = 1000 * 60 * 60 * 3;

export const LOGIN_PAGE_PATH = "/auth/login";
export const DASHBOARD_BASE_PATH = "/";

export const RESTAURANTS_BASE_PATH = "/restaurants";
export const CREATE_RESTAURANTS_PATH = `${RESTAURANTS_BASE_PATH}/create`;

export const LOGIN_URL = `${HOST}${LOGIN_PAGE_PATH}`;
export const BASE_URL = `${HOST}${DASHBOARD_BASE_PATH}`;

export const ICON_BACKEND_KEY = "icon_base_url";
export const FAQ_ATTACHMENT_BACKEND_KEY = "faq_attachment_base_url";

export const DEBOUNCE_TIME = 200;

export const DEFAULT_PAGE_SIZE = 15;
export const DEFAULT_PAGE_NUMBER = 1;

export const USER_ROLES = {
	super_admin: "Owner",
	manager: "Manager",
	delivery: "Delivery",
};
