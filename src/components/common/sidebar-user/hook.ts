import { useIsMobile } from "@/hooks/use-mobile";
import { useUserLoadStateStore, useUserStore } from "@/store";
import { useEffect, useState } from "react";

export const useSidebarUser = () => {
	const { isUserLoading } = useUserLoadStateStore();
	const { user, username, userInitials } = useUserStore();
	const isMobile = useIsMobile();

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	return {
		isUserLoading: isUserLoading,
		user,
		username,
		userInitials,
		isMobile,
		isDropdownOpen,
		setIsDropdownOpen,
	};
};
