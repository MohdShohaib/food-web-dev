"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const UserScreenLoading = () => {
	return (
		<div className="w-full flex-1 flex justify-between gap-20">
			<div className="flex flex-col justify-start items-start gap-5">
				<Skeleton className="size-44 rounded-full" />
				<Skeleton className="w-60 h-6 rounded-sm" />
				<Skeleton className="w-60 h-6 rounded-sm" />
			</div>
			<div className="flex-1 flex flex-col gap-5">
				<Skeleton className="w-40 h-7 rounded-sm" />
				<Skeleton className="w-full h-10 rounded-sm" />
				<Skeleton className="w-full h-10 rounded-sm" />
				<Skeleton className="w-full h-10 rounded-sm" />
				<Separator />
				<Skeleton className="w-40 h-7 rounded-sm" />
				<Skeleton className="w-full h-10 rounded-sm" />
				<Skeleton className="w-full h-10 rounded-sm" />
			</div>
		</div>
	);
};
