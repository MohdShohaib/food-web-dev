import { create } from "zustand";

interface AuthTokenStore {
	authToken: string | null;
	setAuthToken: (token: string | null) => void;
}

export const useAuthTokenStore = create<AuthTokenStore>()((set) => ({
	authToken: null,
	setAuthToken: (token) =>
		set(() => ({
			authToken: token,
		})),
}));
