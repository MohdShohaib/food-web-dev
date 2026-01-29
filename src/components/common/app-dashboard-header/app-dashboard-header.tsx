"use client";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppDashboardHeader = () => {
	return (
		<div className="w-full flex py-2 px-3 items-center border-b-2 border-neutral-100 justify-between">
			<div className="flex items-center gap-1">
				<SidebarTrigger className="text-neutral-500 hover:text-neutral-900" />
				<p className="text-neutral-500 text-base">COLLAPSE</p>
			</div>

			<Button variant="neutral" appearance="outlined" size="icon">
				<Icon name="bell" />
			</Button>
		</div>
	);
};

export default AppDashboardHeader;
