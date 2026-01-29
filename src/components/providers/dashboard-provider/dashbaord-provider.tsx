"use client";

import { AppDashboardHeader, AppSidebar } from "@/components/common";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
	children: React.ReactNode;
};

export const DashboardProvider = (props: Props) => {
	const { children } = props;

	return (
		<>
			<AppSidebar />
			<SidebarInset className="[--sidebar-offset:0px] md:[--sidebar-offset:var(--sidebar-width)] md:peer-data-[state=collapsed]:[--sidebar-offset:0px]">
				<div className="w-full min-h-screen flex flex-col font-primary">
					<AppDashboardHeader />
					<div className="w-full flex flex-col gap-2 px-2 flex-1">
						{children}
					</div>
				</div>
			</SidebarInset>
		</>
	);
};

export default DashboardProvider;
