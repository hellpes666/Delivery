import React, { ReactNode } from "react";
import { Aside, Layout, PageHeader } from ".";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { cn } from "@/lib/utils";

interface IPageLayout {
	children: ReactNode;
}
export const PageLayout: React.FC<IPageLayout> = ({ children }) => {
	const themeState = useSelector((state: RootState) => state.theme.theme);

	console.log(themeState);
	return (
		<div
			className={cn(
				"flex h-full w-full justify-between",
				themeState === "light" ? "" : "dark"
			)}
		>
			<Aside />

			<Layout
				size={"medium"}
				className="w-full flex flex-col gap-6 bg-background h-full  "
			>
				<PageHeader />
				{children}
			</Layout>
		</div>
	);
};
