"use client";

import { SIDEBAR_DATA } from "@/constants/sidebar-data";
import { Logo } from "@/components/brand";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { NavGroup } from "@/components/elements/sidebar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarUser } from "../sidebar-user";

const AppSidebar = () => {
	return (
		<Sidebar className="pl-2 py-1 font-tertiary">
			<SidebarHeader className="py-5">
				<Logo />
			</SidebarHeader>
			<SidebarContent className="mt-3">
				{SIDEBAR_DATA.navGroups.map((props, index) => (
					<NavGroup key={index} {...props} />
				))}
			</SidebarContent>
			<SidebarFooter className="gap-1">
				<Button
					appearance="ghost"
					variant="neutral"
					className="p-0 pl-0 pr-0 pt-0 pb-0 hover:bg-transparent active:bg-transparent flex justify-start"
				>
					<p>PRIVACY POLICY</p>
				</Button>
				<Button
					appearance="ghost"
					variant="neutral"
					className="p-0 pl-0 pr-0 pt-0 pb-0 hover:bg-transparent active:bg-transparent flex justify-start"
				>
					<p>TERMS OF SERVICE</p>
				</Button>
				<SidebarUser />
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
