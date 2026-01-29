"use client";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const NoEmployees = () => {
	return (
		<div className="w-full flex-1 flex flex-col gap-1 items-center justify-center">
			<div className="size-60 bg-accent rounded-sm"></div>
			<p className="mt-6 text-xl font-bold text-center">
				No employees added yet
			</p>
			<p className="mt-4 text-muted-foreground text-center">
				Start by adding managers/drivers to your team.
			</p>
			<p className="text-muted-foreground text-center">
				Once added, they can start accessing and managing your GrubPacs.
			</p>
			<Button size="lg" className="text-base mt-6">
				<Icon name="plus" />
				<p>ADD EMPLOYEE</p>
			</Button>
		</div>
	);
};

export default NoEmployees;
