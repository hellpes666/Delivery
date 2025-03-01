import { JSX, useState } from "react";
import { Layout, PageLayout } from "..";
import { cn } from "@/lib/utils";
import { LuPackageSearch } from "react-icons/lu";
import { formatDate } from "@/components/shared/lib/formatDate";
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
				"flex justify-between bg-primary rounded-2xl px-6 py-6 w-full",
				className
			)}
		>
			<div className="flex flex-col items-start">
				<h2 className="text-primary-foreground/90 text-md tracking-wide ">
					{title}
				</h2>
				<h3 className="text-primary-foreground font-bold tracking-wider text-xl">
					{info}
				</h3>
			</div>
			<div className="px-4 py-1 bg-input rounded-full flex items-center justify-center">
				{icon}
			</div>
		</Layout>
	);
};

type WidgetType =
	| "Delayed delivery"
	| "Daily plan"
	| "Availbe trucks"
	| "Recent requests";

interface IStatisticCard {
	title: string;
	currentDate?: string;
	link?: string;
	options?: boolean;
	typeOfWidget: WidgetType;
	className?: string;
}

const StatisticHeader: React.FC<
	Exclude<IStatisticCard, "title" | "typeOfWidget" | "currentDate">
> = ({ title, typeOfWidget, currentDate }) => {
	return (
		<header>
			<h2 className="text-primary-foreground font-bold tracking-wider text-2xl flex items-end gap-3">
				{title}
				{currentDate && (
					<p className="text-muted/80 font-normal tracking-wide text-sm flex items-center gap-3">
						{currentDate}
					</p>
				)}
			</h2>
		</header>
	);
};

const StatisticCard: React.FC<IStatisticCard> = ({
	title,
	currentDate,
	link,
	options,
	typeOfWidget,
	className,
}) => {
	return (
		<Layout
			size="small"
			className={cn(
				"flex justify-between bg-accent-foreground rounded-2xl px-6 py-6 w-full",
				className
			)}
		>
			<StatisticHeader
				title={title}
				typeOfWidget={typeOfWidget}
				currentDate={currentDate}
			/>
		</Layout>
	);
};

function Main() {
	const createCard = (title: string, info: number): IInfoCard => ({
		title,
		info,
		icon: <LuPackageSearch className="text-accent-foreground size-6" />,
		className: "shadow-xl",
	});

	const CARDS = [
		createCard("New packages", 222),
		createCard("Waiting", 60),
		createCard("In transit", 2000),
		createCard("Delivered", 3600),
	];
	const [currentDate, setCurrentDate] = useState(new Date());
	return (
		<PageLayout>
			<h1 className="text-primary text-2xl font-medium tracking-wide">
				Overview
			</h1>
			<div className="space-y-4">
				<section className="flex overflow-x-auto pb-2 scrollbar-hide gap-4">
					{CARDS.map((card) => (
						<div key={card.id} className="min-w-[150px] flex-1">
							<InfoCard {...card} className="shadow-xl h-full" />
						</div>
					))}
				</section>

				<section className="grid grid-cols-2 gap-4">
					{[1, 2, 3, 4].map((i) => (
						<StatisticCard
							key={i}
							title={`Statistic ${i}`}
							typeOfWidget="Delayed delivery"
							link="/"
							currentDate={formatDate(currentDate, {
								weekday: "short",
								day: "2-digit",
								month: "short",
								hour: "2-digit",
								minute: "2-digit",
								hour12: false,
							})}
						/>
					))}
				</section>
			</div>
		</PageLayout>
	);
}

export default Main;

/*

weekday: "short",
			day: "2-digit",
			month: "short",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,*/
