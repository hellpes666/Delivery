import { cn } from "@/lib/utils";
import React from "react";

interface ILayout {
	size: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
}
const SIZE_MAP = {
	small: "px-8 py-2",
	medium: "px-16 py-4",
	large: "px-24 py-6",
};

const  Layout: React.FC<ILayout> = ({
	size = "medium",
	children,
	className,
}) => (
	<div className={cn("bg-background", SIZE_MAP[size], className)}>
		{children}
	</div>
);

export default Layout;
