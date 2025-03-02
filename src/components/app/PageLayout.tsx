import React, { ReactNode } from "react";
import { Aside, Layout, PageHeader } from ".";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { cn } from "@/lib/utils";

interface IPageLayout {
	children: ReactNode;
	className?: string;
	layoutClassName?: string;
}
export const PageLayout: React.FC<IPageLayout> = ({
	children,
	className,
	layoutClassName,
}) => {
	const themeState = useSelector((state: RootState) => state.theme.theme);

	console.log(themeState);
	return (
		<div
			className={cn(
				"flex h-full w-full justify-between",
				themeState === "light" ? "" : "dark",
				className
			)}
		>
			<Aside />

			<Layout
				size={"medium"}
				className={cn(
					"w-full flex flex-col gap-6 bg-background h-full  ",
					layoutClassName
				)}
			>
				<PageHeader />
				{children}
			</Layout>
		</div>
	);
};
