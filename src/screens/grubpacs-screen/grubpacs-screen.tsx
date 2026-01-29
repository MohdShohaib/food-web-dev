"use client";

import { DashboardHeader } from "@/components/elements";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { useGrubpacsScreen } from "./hook";
import { NoGrubpacs } from "@/components/elements";

const GrubpacsScreen = () => {
	const { emptyPage } = useGrubpacsScreen();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="GrubPacs"
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
										{/* <Icon name="penLine" /> */}
										<p>VIEW SUSPENDED</p>
									</Button>
								</div>
							)}
						</>
					}
				/>

				{emptyPage ? (
					<NoGrubpacs />
				) : (
					<div className="w-full flex-1 flex flex-col"></div>
				)}
			</div>
		</DashboardProvider>
	);
};

export default GrubpacsScreen;
