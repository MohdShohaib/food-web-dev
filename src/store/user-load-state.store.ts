import { create } from "zustand";

interface UserLoadStateStore {
	isUserLoading: boolean;
	setIsUserLoading: (newState: boolean) => void;
}

export const useUserLoadStateStore = create<UserLoadStateStore>()((set) => ({
	isUserLoading: false,
	setIsUserLoading: (newState) =>
		set(() => ({
			isUserLoading: newState,
		})),
}));
