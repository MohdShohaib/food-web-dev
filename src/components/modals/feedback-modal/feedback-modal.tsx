"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface Props {
	open: boolean;
	onClose: () => void;
}

const FeedbackModal = (props: Props) => {
	const { open, onClose } = props;

	return (
		<Dialog
			open={open}
			onOpenChange={(open) => (!open ? onClose() : undefined)}
		>
			<DialogContent className="max-w-fit lg:max-w-fit p-6">
				<DialogHeader className="w-full flex flex-col">
					<DialogTitle className="hidden"></DialogTitle>
					<div className="w-full flex flex-col items-center justify-center">
						<h2 className="text-2xl font-semibold mt-5">
							Got a minute?
						</h2>
						<p className="mt-4 text-sm text-center ">
							We'd love to hear how your experience has been so
							far.
						</p>
						<p className="mt-0.5 text-sm text-center ">
							Your feedback helps us improve GrubPac for you and
							others.
						</p>
					</div>
				</DialogHeader>
				<div className="w-full flex flex-col gap-2 mt-2">
					<Button size="lg">
						<p>GIVE FEEDBACK</p>
					</Button>
					<Button
						size="lg"
						appearance="ghost"
						variant="neutral"
						onClick={onClose}
					>
						<p>NO THANKS</p>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default FeedbackModal;
