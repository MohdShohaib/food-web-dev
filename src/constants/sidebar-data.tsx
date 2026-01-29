import { SidebarData } from "@/types/common/nav";
import { Icon } from "@/components/icons";

export const SIDEBAR_DATA: SidebarData = {
	navGroups: [
		{
			items: [
				{
					title: "DASHBOARD",
					url: "/",
					icon: () => <Icon name="grid" className="w-6 h-6" />,
				},
				{
					title: "RESTAURANTS",
					url: "/restaurants",
					icon: () => <Icon name="globe" className="w-6 h-6" />,
				},
				{
					title: "GRUBPACS",
					url: "/grubpacs",
					icon: () => <Icon name="box" className="w-6 h-6" />,
				},
				{
					title: "GRUBLOCK",
					url: "/grublock",
					icon: () => (
						<Icon
							name="grublock"
							className="w-6 h-6 fill-primary"
						/>
					),
					primary: true,
				},
				{
					title: "EMPLOYEES",
					url: "/employees",
					icon: () => <Icon name="teamMember" className="w-6 h-6" />,
					endLine: true,
				},
			],
		},
		{
			items: [
				{
					title: "SYSTEM LOGS",
					url: "/system-logs",
					icon: () => (
						<Icon name="clipboardText" className="w-6 h-6" />
					),
				},
				{
					title: "HELP",
					url: "/help",
					icon: () => (
						<Icon name="questionCircle" className="w-6 h-6" />
					),
				},
			],
		},
	],
};
