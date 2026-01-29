import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center justify-center border px-3 py-2 text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
	{
		variants: {
			borderRadius: {
				large: "rounded-lg",
				medium: "rounded-md",
				small: "rounded-sm",
				full: "rounded-full",
			},
			variant: {
				primary:
					"border-transparent bg-primary text-primary-foreground",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground",
				error: "border-transparent bg-error-450 text-white focus-visible:ring-error-450/20 dark:focus-visible:ring-error-450/40",
				success:
					"border-transparent bg-success-450 text-white focus-visible:ring-success-450/20 dark:focus-visible:ring-success-450/40",
				warning:
					"border-transparent bg-warning-450 text-white focus-visible:ring-warning-450/20 dark:focus-visible:ring-warning-450/40",
				theme: "border-transparent bg-theme-450 text-white focus-visible:ring-theme-450/20 dark:focus-visible:ring-theme-450/40",
			},
			type: {
				solid: "",
				outline: "",
			},
		},
		compoundVariants: [
			// Solid type hover states
			{
				variant: "primary",
				type: "solid",
				className: "[a&]:hover:bg-primary/90",
			},
			{
				variant: "secondary",
				type: "solid",
				className: "[a&]:hover:bg-secondary/90",
			},
			{
				variant: "error",
				type: "solid",
				className: "[a&]:hover:bg-error-450/90 dark:bg-error-450/60",
			},
			{
				variant: "success",
				type: "solid",
				className:
					"[a&]:hover:bg-success-450/90 dark:bg-success-450/60",
			},
			{
				variant: "warning",
				type: "solid",
				className:
					"[a&]:hover:bg-warning-450/90 dark:bg-warning-450/60",
			},
			{
				variant: "theme",
				type: "solid",
				className: "[a&]:hover:bg-theme-450/90 dark:bg-theme-450/60",
			},
			{
				variant: "primary",
				type: "outline",
				className:
					"border-primary bg-primary/10 text-primary [a&]:hover:bg-primary/20",
			},
			{
				variant: "secondary",
				type: "outline",
				className:
					"border-secondary bg-secondary/10 text-secondary-foreground [a&]:hover:bg-secondary/20",
			},
			{
				variant: "error",
				type: "outline",
				className:
					"border-error-450 bg-error-450/10 text-error-450 [a&]:hover:bg-error-450/20",
			},
			{
				variant: "success",
				type: "outline",
				className:
					"border-success-450 bg-success-450/10 text-success-450 [a&]:hover:bg-success-450/20",
			},
			{
				variant: "warning",
				type: "outline",
				className:
					"border-warning-450 bg-warning-450/10 text-warning-450 [a&]:hover:bg-warning-450/20",
			},
			{
				variant: "theme",
				type: "outline",
				className:
					"border-theme-450 bg-theme-450/10 text-theme-450 [a&]:hover:bg-theme-450/20",
			},
		],
		defaultVariants: {
			variant: "primary",
			borderRadius: "large",
			type: "solid",
		},
	}
);

function Badge({
	className,
	variant,
	borderRadius,
	type,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(
				badgeVariants({ variant, borderRadius, type }),
				className
			)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
