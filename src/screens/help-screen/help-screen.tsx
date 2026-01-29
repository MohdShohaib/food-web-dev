"use client";

import { DashboardHeader } from "@/components/elements";
import { Icon } from "@/components/icons";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useHelpScreen } from "./hook";
import { FeedbackModal } from "@/components/modals";

const HelpScreen = () => {
	const {
		isFeedbackModalOpen,
		toggleFeedbackModal,
		searchQuery,
		onSearchQueryChange,
		clearSearchQuery,
	} = useHelpScreen();

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5 pb-16">
				<DashboardHeader title="How can we help?" />
				<div className="w-full flex px-3 mt-3">
					<InputGroup className="w-full border-x-0 border-t-0 rounded-none shadow-none">
						<InputGroupInput
							placeholder="Search"
							className="w-full"
							value={searchQuery}
							onChange={onSearchQueryChange}
						/>
						<InputGroupAddon>
							<Icon name="search" />
						</InputGroupAddon>
						{searchQuery.length > 0 && (
							<InputGroupAddon align="inline-end">
								<Button
									size="icon"
									variant="primary"
									appearance="ghost"
									onClick={clearSearchQuery}
									className="bg-transparent hover:bg-transparent active:bg-transparent p-0 size-4"
								>
									<Icon name="x" />
								</Button>
							</InputGroupAddon>
						)}
					</InputGroup>
				</div>
			</div>
			<div className="fixed bottom-0 left-(--sidebar-offset) right-0 bg-background p-3">
				<div className="flex flex-col bg-warning-100 p-2.5 border border-warning-450 rounded-md">
					<div className="flex items-center w-full justify-between">
						<p className="font-bold text-sm">
							Still having doubts?
						</p>
						<Button
							size="sm"
							variant="warning"
							appearance="solid"
							onClick={toggleFeedbackModal}
						>
							<p>WRITE TO US</p>
						</Button>
					</div>
					<p className="text-sm font-medium">
						You can write to us at{" "}
						<span className="mx-1 underline underline-offset-1">
							<a>support@grubpac.com</a>
						</span>
						And {"we'll"} get back to you as soon as possible.
					</p>
				</div>
			</div>
			<FeedbackModal
				open={isFeedbackModalOpen}
				onClose={toggleFeedbackModal}
			/>
		</DashboardProvider>
	);
};

export default HelpScreen;
