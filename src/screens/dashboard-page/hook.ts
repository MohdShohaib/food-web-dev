import { useUserStore } from "@/store";

export const useDashboardPage = () => {
	const { username } = useUserStore();

	return {
		username,
	};
};
