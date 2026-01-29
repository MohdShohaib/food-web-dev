"use client";

import { DashboardHeader } from "@/components/elements";
import { Icon } from "@/components/icons";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { UserScreenLoading } from "./loading";
import { useAccountScreen } from "./hook";
import { Avatar } from "@/components/ui/avatar";
import BoringAvatar from "boring-avatars";
import { Separator } from "@/components/ui/separator";
import { USER_ROLES } from "@/constants/configs";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { EditAccountModal } from "./modals";

const AccountScreen = () => {
	const {
		isUserLoading,
		user,
		username,
		isSidebarOpen,
		editAccountModalOpen,
		toggleEditAccountModal,
	} = useAccountScreen();

	useEffect(() => {
		console.log(isSidebarOpen);
	}, [isSidebarOpen]);

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="Your Account"
					ActionSection={
						<div className="w-fit flex items-center">
							<Button
								appearance="outlined"
								variant="primary"
								className="text-base"
								onClick={toggleEditAccountModal}
							>
								<Icon name="penLine" />
								<p>EDIT</p>
							</Button>
						</div>
					}
				/>

				<div className="w-full grid grid-cols-12 mt-8 px-5 relative">
					<div
						className={twMerge(
							"flex flex-col",
							isSidebarOpen
								? "col-span-12"
								: "col-span-10 colo-start-2"
						)}
					>
						{isUserLoading || !user || !username ? (
							<UserScreenLoading />
						) : (
							<div className="w-full flex justify-between pb-16">
								<div className="pr-5 flex flex-col gap-1 min-w-[350px]">
									<Avatar className="size-40 rounded-lg">
										<BoringAvatar
											className="size-40"
											name={username}
											variant="ring"
										/>
									</Avatar>
									<p className="text-xl font-semibold mt-6">
										{username}
									</p>
									<p className="text-neutral-400 text-lg">
										#
										<span className="ml-1">
											{user.type === "super_admin"
												? user.profile.client_id
												: user.profile.employee_id}
										</span>
									</p>
								</div>

								<div className="flex-1 flex flex-col ml-4">
									<p className="text-base text-neutral-300 font-medium">
										Basic Details
									</p>
									<div className="w-full grid grid-cols-12 mt-6">
										<div className="col-span-6 flex items-center gap-1.5">
											<Icon
												name="mail"
												className="w-5 h-5 text-neutral-400"
											/>
											<p className="text-base text-neutral-400 ml-1">
												Email:
											</p>
										</div>
										<div className="col-span-6 flex items-center gap-1.5">
											<p className="text-base text-neutral-600">
												{user.profile.email}
											</p>
										</div>
									</div>
									<div className="w-full grid grid-cols-12 mt-4">
										<div className="col-span-6 flex items-center gap-1.5">
											<Icon
												name="phone"
												className="w-5 h-5 text-neutral-400"
											/>
											<p className="text-base text-neutral-400 ml-1">
												Contact:
											</p>
										</div>
										<div className="col-span-6 flex items-center gap-1.5">
											<p className="text-base text-neutral-600">
												{user.profile.country_code}{" "}
												{user.profile.mobile_number}
											</p>
										</div>
									</div>
									<div className="w-full grid grid-cols-12 mt-4">
										<div className="col-span-6 flex items-center gap-1.5">
											<Icon
												name="key"
												className="w-5 h-5 text-neutral-400"
											/>
											<p className="text-base text-neutral-400 ml-1">
												Password:
											</p>
										</div>
										<div className="col-span-6 flex items-center gap-1.5">
											<p className="text-base text-neutral-600">
												{user.profile.password
													? "••••••••••"
													: ""}
											</p>
										</div>
									</div>
									<Separator className="my-6" />
									<p className="text-base text-neutral-300 font-medium">
										Professional Details
									</p>
									<div className="w-full grid grid-cols-12 mt-6">
										<div className="col-span-6 flex items-center gap-1.5">
											<Icon
												name="user"
												className="w-5 h-5 text-neutral-400"
											/>
											<p className="text-base text-neutral-400 ml-1">
												Role:
											</p>
										</div>
										<div className="col-span-6 flex items-center gap-1.5">
											<p className="text-base text-neutral-600">
												{/* {USER_ROLES[user.type]} */}
											</p>
										</div>
									</div>
									<div className="w-full grid grid-cols-12 mt-4">
										<div className="col-span-6 flex items-center gap-1.5">
											<Icon
												name="locationPin"
												className="w-5 h-5 text-neutral-400"
											/>
											<p className="text-base text-neutral-400 ml-1">
												Organisation:
											</p>
										</div>
										<div className="col-span-6 flex items-center gap-1.5">
											<p className="text-base text-neutral-600">
												{user.type === "super_admin"
													? user.profile
															.organization_name
													: ""}
											</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="fixed bottom-0 left-(--sidebar-offset) right-0 px-5 bg-background py-2 flex h-16 items-center justify-between z-20">
						<div className="flex items-center gap-2">
							<p className="text-neutral-400">Account Created:</p>
							{user && (
								<p className="text-neutral-400">
									{new Intl.DateTimeFormat("en-GB", {
										day: "2-digit",
										month: "short",
										year: "numeric",
									}).format(
										new Date(user.profile.created_at)
									)}
								</p>
							)}
						</div>

						<Button appearance="outlined" variant="neutral">
							<p>DELETE ACCOUNT</p>
						</Button>
					</div>
				</div>
			</div>
			{user && editAccountModalOpen && (
				<EditAccountModal
					open={editAccountModalOpen}
					onClose={toggleEditAccountModal}
					onSubmit={async () => {}}
					user={user}
				/>
			)}
		</DashboardProvider>
	);
};

export default AccountScreen;
