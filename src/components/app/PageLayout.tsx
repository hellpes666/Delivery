import React, { ReactNode } from "react";
import Aside from "./Aside";
import Layout from "./Layout";

interface IPageLayout {
	children: ReactNode;
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {
	return (
		<div className="flex h-[100dvh] w-full">
			<Aside />
			<Layout size={"large"} className="w-full">
				{children}
			</Layout>
		</div>
	);
};

export default PageLayout;
