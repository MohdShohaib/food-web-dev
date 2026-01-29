"use client";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CREATE_RESTAURANTS_PATH } from "@/constants/configs";
import Link from "next/link";

const NoRestaurants = () => {
	return (
		<div className="w-full flex-1 flex flex-col gap-2 items-center justify-center">
			<div className="size-60 bg-accent rounded-sm"></div>
			<p className="mt-6 text-xl font-bold text-center">
				Your bussiness operates in multiple locations?
			</p>
			<p className="mt-1 text-muted-foreground text-center">
				Add your restaurants to start managing your Grubpacs
				efficiently.
			</p>
			<Link href={CREATE_RESTAURANTS_PATH}>
				<Button size="lg" className="text-base mt-5">
					<Icon name="plus" />
					<p>ADD RESTAURANT</p>
				</Button>
			</Link>
		</div>
	);
};

export default NoRestaurants;
