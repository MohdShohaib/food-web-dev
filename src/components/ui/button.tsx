import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:bg-neutral-100 disabled:text-neutral-300 disabled:border-neutral-100 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer [&:hover_span]:underline [&:hover_span]:underline-offset-2 [&:hover_p]:underline [&:hover_p]:underline-offset-2",
	{
		variants: {
			variant: {
				primary: "",
				success: "",
				warning: "",
				error: "",
				neutral: "",
			},
			appearance: {
				solid: "shadow-xs",
				outlined: "bg-transparent border",
				ghost: "bg-transparent",
			},
			size: {
				default: "h-10 px-4 py-2 has-[>svg]:px-3",
				sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		compoundVariants: [
			{
				variant: "primary",
				appearance: "solid",
				className:
					"bg-theme-450 text-primary-foreground hover:bg-theme-600 active:bg-theme-700",
			},
			{
				variant: "success",
				appearance: "solid",
				className:
					"bg-success-450 text-white hover:bg-success-500 active:bg-success-700",
			},
			{
				variant: "warning",
				appearance: "solid",
				className:
					"bg-warning-450 text-white hover:bg-warning-500 active:bg-warning-700",
			},
			{
				variant: "error",
				appearance: "solid",
				className:
					"bg-error-450 text-white hover:bg-error-500 active:bg-error-700",
			},
			{
				variant: "neutral",
				appearance: "solid",
				className:
					"bg-neutral-450 text-primary-foreground hover:bg-neutral-500 active:bg-neutral-700",
			},
			{
				variant: "primary",
				appearance: "outlined",
				className:
					"border-theme-450 text-theme-450 hover:bg-theme-50 hover:border-theme-600 hover:text-theme-600 active:bg-theme-100 active:border-theme-700 active:text-theme-700",
			},
			{
				variant: "success",
				appearance: "outlined",
				className:
					"border-success-450 text-success-450 hover:bg-success-50 hover:border-success-500 hover:text-success-500 active:bg-success-100 active:border-success-700 active:text-success-700",
			},
			{
				variant: "warning",
				appearance: "outlined",
				className:
					"border-warning-450 text-warning-450 hover:bg-warning-50 hover:border-warning-500 hover:text-warning-500 active:bg-warning-100 active:border-warning-700 active:text-warning-700",
			},
			{
				variant: "error",
				appearance: "outlined",
				className:
					"border-error-450 text-error-450 hover:bg-error-50 hover:border-error-500 hover:text-error-500 active:bg-error-100 active:border-error-700 active:text-error-700",
			},
			{
				variant: "neutral",
				appearance: "outlined",
				className:
					"border-neutral-450 text-neutral-450 hover:bg-neutral-50 hover:border-neutral-500 hover:text-neutral-500 active:bg-neutral-100 active:border-neutral-700 active:text-neutral-700",
			},
			{
				variant: "primary",
				appearance: "ghost",
				className:
					"text-theme-450 hover:bg-theme-50 hover:text-theme-600 active:bg-theme-100 active:text-theme-700",
			},
			{
				variant: "success",
				appearance: "ghost",
				className:
					"text-success-450 hover:bg-success-50 hover:text-success-500 active:bg-success-100 active:text-success-700",
			},
			{
				variant: "warning",
				appearance: "ghost",
				className:
					"text-warning-450 hover:bg-warning-50 hover:text-warning-500 active:bg-warning-100 active:text-warning-700",
			},
			{
				variant: "error",
				appearance: "ghost",
				className:
					"text-error-450 hover:bg-error-50 hover:text-error-500 active:bg-error-100 active:text-error-700",
			},
			{
				variant: "neutral",
				appearance: "ghost",
				className:
					"text-neutral-450 hover:bg-neutral-50 hover:text-neutral-500 active:bg-neutral-100 active:text-neutral-700",
			},
		],
		defaultVariants: {
			variant: "primary",
			appearance: "solid",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	appearance,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({ variant, appearance, size, className })
			)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
