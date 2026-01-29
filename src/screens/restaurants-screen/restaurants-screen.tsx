"use client";

import { DashboardProvider } from "@/components/providers";
import { DashboardHeader } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { useRestaurantsScreen } from "./hook";
import { NoRestaurants } from "./components";
import Link from "next/link";
import { CREATE_RESTAURANTS_PATH } from "@/constants/configs";

const RestaurantsScreen = () => {
	const { emptyPage } = useRestaurantsScreen();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="Restaurants"
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
									<Link href={CREATE_RESTAURANTS_PATH}>
										<Button
											appearance="solid"
											variant="primary"
											className="text-base"
										>
											<Icon name="plus" />
											<p>ADD NEW</p>
										</Button>
									</Link>
								</div>
							)}
						</>
					}
				/>

				{emptyPage ? (
					<NoRestaurants />
				) : (
					<div className="w-full flex-1 flex flex-col gap-2 items-center justify-center"></div>
				)}
			</div>
		</DashboardProvider>
	);
};

export default RestaurantsScreen;
