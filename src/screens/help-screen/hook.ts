import { DEBOUNCE_TIME } from "@/constants/configs";
import { utils } from "@/utils";
import { useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";

export const useHelpScreen = () => {
	const [isFeedbackModalOpen, setIsFeedbackModalOpen] =
		useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [query] = useDebounce(searchQuery, DEBOUNCE_TIME);
	const onDebouncedQueryChange = useDebouncedCallback(() => {},
	DEBOUNCE_TIME);

	return {
		isFeedbackModalOpen,
		toggleFeedbackModal: utils.uiInteractions.toggleBooleanState(
			setIsFeedbackModalOpen
		),
		searchQuery,
		query,
		onSearchQueryChange: utils.uiInteractions.onTextInputChange(
			setSearchQuery,
			onDebouncedQueryChange
		),
		clearSearchQuery: () => setSearchQuery(""),
	};
};
