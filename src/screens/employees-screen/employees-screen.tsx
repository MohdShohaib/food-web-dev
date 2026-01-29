"use client";

import { DashboardHeader } from "@/components/elements";
import { Icon } from "@/components/icons";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { useEmployeesScreen } from "./hook";
import { NoEmployees } from "./components";

const EmployeesScreen = () => {
	const { emptyPage } = useEmployeesScreen();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="Employees"
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
									<Button
										appearance="solid"
										variant="primary"
										className="text-base"
										// onClick={toggleEditAccountModal}
									>
										<Icon name="plus" />
										<p>ADD NEW</p>
									</Button>
								</div>
							)}
						</>
					}
				/>

				{emptyPage ? (
					<NoEmployees />
				) : (
					<div className="w-full flex-1 flex flex-col"></div>
				)}
			</div>
		</DashboardProvider>
	);
};

export default EmployeesScreen;
