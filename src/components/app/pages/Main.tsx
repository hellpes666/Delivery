import { JSX } from "react";
import { Layout, PageLayout } from "..";
import { cn } from "@/lib/utils";
import { LuPackageSearch } from "react-icons/lu";
interface IInfoCard {
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
				"flex justify-between bg-accent-foreground rounded-2xl px-6 py-6 w-full",
				className
			)}
		>
			<div className="flex flex-col items-start">
				<h2 className="text-muted-foreground text-md tracking-wide">
					{title}
				</h2>
				<h3 className="text-primary font-medium tracking-wide text-xl">
					{info}
				</h3>
			</div>
			<div className="px-4 py-1 bg-accent rounded-full flex items-center justify-center">
				{icon}
			</div>
		</Layout>
	);
};

function Main() {
	const CARDS: IInfoCard[] = [
		{
			title: "New packages",
			info: 222,
			icon: (
				<LuPackageSearch
					size={24}
					className="text-accent-foreground w-full object-cover"
				/>
			),
		},
		{
			title: "New packages",
			info: 222,
			icon: (
				<LuPackageSearch
					size={24}
					className="text-accent-foreground w-full object-cover"
				/>
			),
		},
		{
			title: "New packages",
			info: 222,
			icon: (
				<LuPackageSearch
					size={24}
					className="text-accent-foreground w-full object-cover"
				/>
			),
		},
		{
			title: "New packages",
			info: 222,
			icon: (
				<LuPackageSearch
					size={24}
					className="text-accent-foreground w-full object-cover"
				/>
			),
		},
	];
	return (
		<PageLayout>
			<h1 className="text-primary text-2xl font-medium tracking-wide">
				Overview
			</h1>
			<section className="flex flex-wrap justify-between gap-2 md:gap-4 lg:gap-6 ">
				{CARDS.map((card) => (
					<div
						className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-32px)] 
                min-w-[200px] max-w-[290px] p-2 "
					>
						<InfoCard
							{...card}
							className=" shadow-xl overflow-hidden"
						/>
					</div>
				))}
			</section>
		</PageLayout>
	);
}

export default Main;
