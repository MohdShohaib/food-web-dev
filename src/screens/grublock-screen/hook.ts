import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useGrublockScreen = () => {
	const searchParams = useSearchParams();

	const [emptyPage, setEmptyPage] = useState<boolean>(false);

	useEffect(() => {
		if (searchParams.get("empty") === "true") {
			setEmptyPage(true);
		}
	}, [searchParams]);

	return {
		emptyPage,
	};
};
