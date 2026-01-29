"use client";

import { DashboardHeader, NoGrubpacs } from "@/components/elements";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { useGrublockScreen } from "./hook";

const GrublockScreen = () => {
	const { emptyPage } = useGrublockScreen();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="GrubLock"
					ActionSection={
						<>
							{emptyPage ? (
								<div className="w-fit flex items-center gap-2">
									<Button
										appearance="ghost"
										variant="primary"
										className="text-base"
										// onClick={toggleEditAccountModal}
									>
										{/* <Icon name="penLine" /> */}
										<p>KNOW MORE</p>
									</Button>
								</div>
							) : (
								<div className="w-fit flex items-center gap-2">
									<Button
										appearance="ghost"
										variant="primary"
										className="text-base"
										// onClick={toggleEditAccountModal}
									>
										<p>VIEW ALL BOXES</p>
									</Button>
								</div>
							)}
						</>
					}
				/>

				{emptyPage ? (
					<NoGrubpacs description="Active boxes with GrubLock will show up here. Browse help section for queries." />
				) : (
					<div className="w-full flex-1 flex flex-col"></div>
				)}
			</div>
		</DashboardProvider>
	);
};

export default GrublockScreen;
