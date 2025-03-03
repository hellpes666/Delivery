import { Layout } from "@/components/app";
import { cn } from "@/lib/utils";
import { JSX } from "react";

export interface IInfoCard {
	title: string;
	info: number;
	icon: JSX.Element;
	className?: string;
}

const InfoCard: React.FC<IInfoCard> = ({ title, info, icon, className }) => {
	return (
		<Layout
			size="medium"
			className={cn(
				"flex justify-between bg-primary rounded-2xl px-6 py-6 w-full",
				className
			)}
		>
			<div className="flex flex-col items-start justify-between">
				<h2 className="text-primary-foreground/90 text-md tracking-wide ">
					{title}
				</h2>
				<h3 className="text-primary-foreground font-bold tracking-wider text-xl">
					{info}
				</h3>
			</div>
			<div className="px-3 py-0.5 bg-input rounded-2xl flex items-center justify-center">
				{icon}
			</div>
		</Layout>
	);
};

export default InfoCard;
