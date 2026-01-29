import { forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import {
	iconsRegistry,
	type IconName,
	type IconProps,
} from "./icons-registry";

/**
 * Props for the Icon component
 */
export interface IconComponentProps extends IconProps {
	/**
	 * The name of the icon to render
	 * Must be a valid key from the iconsRegistry
	 */
	name: IconName;
	/**
	 * Size of the icon (applies to both width and height)
	 * Can be a number (pixels) or a string (e.g., "1.5rem")
	 */
	size?: number | string;
}

/**
 * A reusable Icon component that renders SVG icons from the icons registry
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="shortLogo" />
 *
 * // With size
 * <Icon name="check" size={24} />
 *
 * // With custom className
 * <Icon name="close" className="text-red-500" />
 *
 * // With all SVG props
 * <Icon name="menu" width={32} height={32} stroke="blue" />
 * ```
 */
const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
	({ name, size, className, style, ...props }, ref) => {
		const IconComponent = iconsRegistry[name];

		if (!IconComponent) {
			console.warn(`Icon "${name}" not found in icons registry`);
			return null;
		}

		const sizeStyle =
			size !== undefined
				? {
						width: typeof size === "number" ? `${size}px` : size,
						height: typeof size === "number" ? `${size}px` : size,
					}
				: {};

		return (
			<IconComponent
				ref={ref}
				className={cn("shrink-0", className)}
				style={{ ...sizeStyle, ...style }}
				{...props}
			/>
		);
	}
);

Icon.displayName = "Icon";

export default Icon;
