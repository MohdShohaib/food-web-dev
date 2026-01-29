import { useSidebar } from "@/components/ui/sidebar";
import { useUserLoadStateStore, useUserStore } from "@/store";
import { utils } from "@/utils";
import { useEffect, useState } from "react";

export const useAccountScreen = () => {
	const { state } = useSidebar();
	const { isUserLoading } = useUserLoadStateStore();
	const { username, user } = useUserStore();

	const [editAccountModalOpen, setEditAccountModalOpen] =
		useState<boolean>(false);

	useEffect(() => {
		console.log("editAccountModalOpen", editAccountModalOpen);
	}, [editAccountModalOpen]);

	return {
		isSidebarOpen: state === "expanded",
		isUserLoading,
		username,
		user,
		editAccountModalOpen,
		toggleEditAccountModal: utils.uiInteractions.toggleBooleanState(
			setEditAccountModalOpen
		),
	};
};
