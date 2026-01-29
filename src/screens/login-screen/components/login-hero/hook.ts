import { CarouselApi } from "@/components/ui/carousel";
import { LOGIN_HERO_CAROUSEL_DATA } from "@/constants/carousel-data";
import { useEffect, useState } from "react";

export const useLoginHero = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(LOGIN_HERO_CAROUSEL_DATA.length);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return {
		carouselApi: api,
		current,
		count,
		setCarouselApi: setApi,
	};
};
