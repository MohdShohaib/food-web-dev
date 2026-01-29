"use client";

import { DashboardHeader } from "@/components/elements";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";

const SystemLogsScreen = () => {
	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="System logs"
					ActionSection={
						<div className="w-fit flex items-center gap-2">
							<Button
								appearance="ghost"
								variant="neutral"
								className="text-base"
								// onClick={toggleEditAccountModal}
							>
								{/* <Icon name="penLine" /> */}
								<p>EXPORT</p>
							</Button>
						</div>
					}
				/>
			</div>
		</DashboardProvider>
	);
};

export default SystemLogsScreen;
