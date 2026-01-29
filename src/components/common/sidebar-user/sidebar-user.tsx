"use client";

import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebarUser } from "./hook";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BoringAvatar from "boring-avatars";
import { BadgeCheck, ChevronsUpDown, LogOut, Moon, Sun } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

const SidebarUser = () => {
	const {
		user,
		isUserLoading,
		username,
		isMobile,
		isDropdownOpen,
		setIsDropdownOpen,
	} = useSidebarUser();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu
					open={isDropdownOpen}
					onOpenChange={setIsDropdownOpen}
				>
					<DropdownMenuTrigger asChild>
						{isUserLoading || !user ? (
							<div className="w-full h-10 rounded-lg flex">
								<Skeleton className="h-10 w-10 rounded-full" />
								<div className="flex-1 h-10 w-full flex flex-col gap-1 ml-2">
									<Skeleton className="h-4 w-full rounded-md" />
									<Skeleton className="h-3 w-full rounded-md" />
								</div>
							</div>
						) : (
							<SidebarMenuButton
								// appearance="outlined"
								// variant="neutral"
								className={twMerge(
									"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border border-neutral-300 h-16 cursor-pointer",
									isDropdownOpen &&
										"bg-accent/50 border-primary"
								)}
							>
								<Avatar className="h-10 w-10 rounded-lg">
									{username && (
										<BoringAvatar name={username} />
									)}
								</Avatar>
								<div className="grid flex-1 text-start text-sm leading-tight">
									<span className="truncate font-semibold">
										{username?.toUpperCase() ?? ""}
									</span>
								</div>
							</SidebarMenuButton>
						)}
					</DropdownMenuTrigger>
					{user && username && (
						<DropdownMenuContent
							className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
							side={isMobile ? "bottom" : "top"}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuItem
								asChild
								className="items-center cursor-pointer"
							>
								<Link href="/settings/account">
									{username && (
										<BoringAvatar
											name={username}
											className="size-8 rounded-lg"
										/>
									)}
									<span className="truncate font-semibold">
										{username.toUpperCase()}
									</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem
									asChild
									className="text-base items-center cursor-pointer"
								>
									<Link href="/settings/account">
										<Icon name="refresh" />
										Transfer ownership
									</Link>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								variant="destructive"
								// onClick={logout}
								className="text-base items-center cursor-pointer"
							>
								<Icon name="arrowLeftTray" />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default SidebarUser;
