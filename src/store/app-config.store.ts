import { BaseConfig } from "@/types/models";
import { create } from "zustand";

interface AppConfigStore {
	config: BaseConfig | null;
	setConfig: (config: BaseConfig | null) => void;
	isConfigLoading: boolean;
	setIsConfigLoading: (isLoading: boolean) => void;
}

export const useAppConfigStore = create<AppConfigStore>()((set) => ({
	config: null,
	setConfig: (config) =>
		set((prev) => ({
			...prev,
			config,
		})),
	isConfigLoading: false,
	setIsConfigLoading: (isLoading) =>
		set((prev) => ({
			...prev,
			isConfigLoading: isLoading,
		})),
}));
