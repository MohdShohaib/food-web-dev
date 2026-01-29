"use client";

import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
} from "@/components/ui/carousel";
import { LOGIN_HERO_CAROUSEL_DATA } from "@/constants/carousel-data";
import Autoplay from "embla-carousel-autoplay";

const LoginHero = () => {
	return (
		<div className="flex-1 bg-secondary h-[calc(100vh-10rem)] rounded-lg flex flex-col p-8">
			<Carousel
				className="w-full flex-1 flex flex-col"
				opts={{ loop: true }}
				plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
			>
				<CarouselContent>
					{LOGIN_HERO_CAROUSEL_DATA.map((item) => (
						<CarouselItem
							key={item.id}
							className="flex flex-col h-full"
						>
							<div className="flex-1 bg-background rounded-lg"></div>
							<div className="py-4 flex flex-col items-center justify-center">
								<h3 className="text-xl font-semibold">
									{item.title}
								</h3>
								<p className="text-center mt-1 text-sm">
									{item.description}
								</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselDots className="pb-2" />
			</Carousel>
		</div>
	);
};

export default LoginHero;
