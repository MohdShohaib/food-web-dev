import { getAuthToken } from "@/actions";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
	useAuthStateStore,
	useAuthTokenStore,
	useUserLoadStateStore,
	useUserStore,
} from "@/store";
import { useGetMyAccount } from "@/services/api/account";

export const useAuthManager = () => {
	const pathname = usePathname();

	const { setIsAuthenticated } = useAuthStateStore();
	const { setAuthToken } = useAuthTokenStore();
	const { user, setUser } = useUserStore();
	const { setIsUserLoading } = useUserLoadStateStore();

	const { data: accountData, isPending: isFetchingMyAccount } =
		useGetMyAccount();

	const checkAuthenticated = async () => {
		try {
			const currentAuthToken = await getAuthToken();

			console.log("current auth token", currentAuthToken);

			if (currentAuthToken.token) {
				setIsAuthenticated(true);
				setAuthToken(currentAuthToken.token);
			} else {
				setIsAuthenticated(false);
				setAuthToken(null);
				setUser(null);
				setIsUserLoading(false);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log(error);
		}
	};

	useEffect(() => {
		if (!isFetchingMyAccount) {
			setIsUserLoading(isFetchingMyAccount);
		} else if (isFetchingMyAccount && !user) {
			setIsUserLoading(isFetchingMyAccount);
		}
	}, [isFetchingMyAccount]);

	useEffect(() => {
		if (
			accountData &&
			(!user || user.profile.id !== accountData.employee.id)
		) {
			console.log("account data", accountData);
			if (accountData.role === "super_admin") {
				setUser({
					type: "super_admin",
					profile: accountData.employee,
				});
			} else {
				setUser({
					type: accountData.role,
					profile: accountData.employee,
				});
			}
		}
	}, [accountData]);

	useEffect(() => {
		checkAuthenticated();
	}, [pathname]);
};
