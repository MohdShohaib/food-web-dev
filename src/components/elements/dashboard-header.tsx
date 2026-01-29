import { useRouter } from "next/navigation";
import { Icon } from "../icons";
import { Button } from "../ui/button";

interface Props {
	title: string;
	ActionSection?: React.ReactNode;
	backRoute?: string;
	backEnabled?: boolean;
}

const DashboardHeader = (props: Props) => {
	const router = useRouter();

	const { title, ActionSection, backRoute, backEnabled } = props;

	const handleBack = () => {
		if (window.history.length < 1 && backRoute) {
			router.push(backRoute);
		} else {
			router.back();
		}
	};

	return (
		<div className="w-full flex py-2 px-3 items-center justify-between">
			<div className="flex items-center gap-3">
				{backEnabled && (
					<Button
						appearance="ghost"
						variant="neutral"
						onClick={handleBack}
						className="size-7 bg-transparent hover:bg-transparent active:bg-transparent"
						size="icon"
					>
						<Icon name="chevronLeft" />
					</Button>
				)}
				<h1 className="text-2xl font-semibold">{title}</h1>
			</div>
			{ActionSection && ActionSection}
		</div>
	);
};

export default DashboardHeader;
