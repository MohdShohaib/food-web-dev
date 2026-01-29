"use client";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";

interface Props {
	description?: string;
}

const NoGrubpacs = (props: Props) => {
	const { description } = props;

	return (
		<div className="w-full flex-1 flex flex-col gap-1 items-center justify-center">
			<div className="size-60 bg-accent rounded-sm"></div>
			<p className="mt-6 text-xl font-bold text-center">
				No boxes to see
			</p>
			<p className="mt-4 text-muted-foreground text-center">
				{description ||
					"New boxes might take some time to show up here. Browse help section for queries."}
			</p>
			<div className=" w-full flex items-center justify-center gap-3 mt-4">
				<Button size="lg" className="text-base mt-6">
					<p>GO TO HELP</p>
					<Icon name="arrowUpRight" />
				</Button>
				<Button
					appearance="outlined"
					size="lg"
					className="text-base mt-6"
				>
					<Icon name="mail" />
					<p>CONTACT SUPPORT</p>
				</Button>
			</div>
		</div>
	);
};

export default NoGrubpacs;
