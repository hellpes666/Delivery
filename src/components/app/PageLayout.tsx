import React, { ReactNode } from "react";
import { Aside, Layout, PageHeader } from ".";

interface IPageLayout {
	children: ReactNode;
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {
	return (
		<div className="flex h-[100dvh] w-full">
			<Aside />
			<Layout size={"large"} className="w-full flex flex-col gap-6">
				<PageHeader />
				{children}
			</Layout>
		</div>
	);
};

export default PageLayout;
