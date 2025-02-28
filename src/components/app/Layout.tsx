import { cn } from "@/lib/utils";
import React from "react";

interface ILayout {
	size: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
}

const Layout: React.FC<ILayout> = ({
	size = "medium",
	children,
	className,
}) => {
	const currentPadding =
		size === "small"
			? "px-8 py-2"
			: size === "medium"
			? "px-16 py-4"
			: "px-24 py-6";

	return (
		<div
			className={cn("bg-[var(--background)]", currentPadding, className)}
		>
			{children}
		</div>
	);
};

export default Layout;
