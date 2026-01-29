"use client";

import { DashboardHeader } from "@/components/elements";
import { DashboardProvider } from "@/components/providers";
import { useDashboardPage } from "./hook";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";

const DashboardPage = () => {
	const { username } = useDashboardPage();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader title="Dashboard" />
				<div className="w-full flex-1 flex flex-col gap-2 items-center justify-center">
					<div className="size-60 bg-accent rounded-sm"></div>
					<p className="mt-3 text-xl font-bold text-center">
						Good morning {username ?? "User"}!
					</p>
					<p className="mt-1 text-muted-foreground text-center">
						Ready to start your day? Head over to boxes section to
						check your GrubPacs.
					</p>
					<Button size="lg" className="text-base mt-2">
						<p>CHECK BOXES</p>
						<Icon name="arrowUpRight" />
					</Button>
				</div>
			</div>
		</DashboardProvider>
	);
};

export default DashboardPage;
