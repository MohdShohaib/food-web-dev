"use client";

import { DashboardHeader } from "@/components/elements";
import { Icon } from "@/components/icons";
import { DashboardProvider } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { useHelpItemScreen } from "./hook";
import { FeedbackModal } from "@/components/modals";

interface Props {
	id: string;
}

const HelpItemScreen = (props: Props) => {
	const { id } = props;

	const { feedbackModalOpen, toggleFeedbackModalOpen } = useHelpItemScreen({
		id,
	});

	return (
		<DashboardProvider>
			<div className="flex-1 w-full flex flex-col mt-5">
				<DashboardHeader
					title="Help Item"
					backEnabled
					backRoute="/help"
					ActionSection={
						<div className="w-fit flex items-center gap-2">
							<Button
								appearance="ghost"
								variant="primary"
								className="text-base"
								onClick={toggleFeedbackModalOpen}
							>
								<Icon name="penLine" />
								<p>WRITE TO US</p>
							</Button>
						</div>
					}
				/>
			</div>
			<FeedbackModal
				open={feedbackModalOpen}
				onClose={toggleFeedbackModalOpen}
			/>
		</DashboardProvider>
	);
};

export default HelpItemScreen;
