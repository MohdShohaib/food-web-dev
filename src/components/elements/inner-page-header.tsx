"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Icon } from "../icons";

interface Props {
	backButton?: boolean;
	defaultFallbackRoute?: string;
}

const InnerPageHeader = (props: Props) => {
	const { backButton, defaultFallbackRoute } = props;

	const router = useRouter();

	const handleBackClick = () => {
		if (window.history.length < 1 && defaultFallbackRoute) {
			router.push(defaultFallbackRoute);
		} else {
			router.back();
		}
	};

	return (
		<div className="w-full px-4 py-3 flex items-center border-b border-neutral-200">
			{backButton && (
				<Button
					appearance="outlined"
					variant="neutral"
					onClick={handleBackClick}
				>
					<Icon name="arrowNarrowLeft" />
					<p>GO BACK</p>
				</Button>
			)}
		</div>
	);
};

export default InnerPageHeader;
