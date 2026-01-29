import { User } from "@/types/models";
import { create } from "zustand";

interface UserStore {
	user: User | null;
	setUser: (user: User | null) => void;
	userInitials: string | null;
	username: string | null;
}

export const useUserStore = create<UserStore>()((set) => ({
	user: null,
	userInitials: null,
	username: null,
	setUser: (user) =>
		set(() => ({
			user: user,
			userInitials: (() => {
				if (user?.type === "super_admin") {
					return user.profile.name
						.split(" ")
						.map((w) => w.charAt(0).toUpperCase())
						.join("");
				}

				if (user?.type === "delivery" || user?.type === "manager") {
					return `${user.profile.first_name
						.charAt(0)
						.toUpperCase()}${user.profile.last_name
						.charAt(0)
						.toUpperCase()}`;
				}

				return "GU";
			})(),
			username: (() => {
				if (user?.type === "super_admin") {
					return user.profile.name;
				}

				if (user?.type === "delivery" || user?.type === "manager") {
					return `${user.profile.first_name}${user.profile.last_name}`;
				}

				return "General user";
			})(),
		})),
}));
