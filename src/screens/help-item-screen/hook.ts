import { utils } from "@/utils";
import { useState } from "react";

interface Args {
	id: string;
}

export const useHelpItemScreen = (args: Args) => {
	const [feedbackModalOpen, setFeedbackModalOpen] = useState<boolean>(false);

	return {
		feedbackModalOpen,
		toggleFeedbackModalOpen:
			utils.uiInteractions.toggleBooleanState(setFeedbackModalOpen),
	};
};
