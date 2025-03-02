import React, { JSX, useState } from "react";
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
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

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
	options?: string[];
	typeOfWidget: WidgetType;
	className?: string;
}

const StatisticHeader: React.FC<Omit<IStatisticCard, "className">> = ({
	title,
	typeOfWidget,
	currentDate,
	link,
	options,
}) => {
	return (
		<header className="flex justify-between items-end w-full">
			<h2 className="text-card font-bold tracking-wider text-2xl flex items-end gap-3">
				{title}
				{currentDate && (
					<p className="text-muted/80 font-normal tracking-wide text-sm flex items-center gap-3">
						{currentDate}
					</p>
				)}
			</h2>

			{typeOfWidget === "Daily plan" ? (
				<SlOptions size={24} className="text-primary cursor-pointer" />
			) : (
				<Link className="text-primary font-medium" to={link as string}>
					Show all &gt;
				</Link>
			)}
		</header>
	);
};

interface IStatisticDelayedDelivery {
	destination: string[];
	truck: string[];
	timeArrive: string[];
	timeDelay: string[];
}

const getBadgeClass = (delay: number): string => {
	const aliasClassName = "py-1 px-2 font-medium rounded-[8px]";
	if (delay < 1) {
		return cn("bg-emerald-200 text-emerald-700", aliasClassName);
	} else if (delay < 3) {
		return cn("bg-orange-200 text-orange-700", aliasClassName);
	} else {
		return cn("bg-red-200 text-red-700", aliasClassName);
	}
};

const getColorClass = (value: number): string => {
	if (value > 75) {
		return "red-700";
	} else if (value > 45) {
		return "orange-700";
	} else {
		return "emerald-700";
	}
};

interface DefineColorProps {
	value: string;
	mode: "badge" | "color";
}

const DefineColor: React.FC<DefineColorProps> = ({ value, mode }) => {
	const parsedValue = Number(value.split(" ")[0].split(":")[0]);

	if (mode === "badge") {
		return <span className={getBadgeClass(parsedValue)}>{value}</span>;
	} else {
		const curValue = Number(value);
		return getColorClass(curValue);
	}
};

const StatisticDelayedDelivery: React.FC<IStatisticDelayedDelivery> = ({
	destination,
	truck,
	timeArrive,
	timeDelay,
}) => {
	const length = destination.length;
	const arr = Array.from({ length }, (_, index) => index);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[180px] text-muted font-bold">
						Destination
					</TableHead>
					<TableHead className=" text-muted font-bold">
						Truck
					</TableHead>
					<TableHead className=" text-muted font-bold">
						Time Arrive
					</TableHead>
					<TableHead className="text-right text-muted font-bold">
						Time delay
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{arr.map((i) => (
					<TableRow
						key={
							destination[i] +
							"-" +
							truck[i] +
							"-" +
							timeArrive[i] +
							"-" +
							timeDelay[i]
						}
					>
						<TableCell
							key={destination[i]}
							className="font-medium text-input"
						>
							{destination[i]}{" "}
						</TableCell>
						<TableCell key={truck[i]} className="text-input">
							{truck[i]}
						</TableCell>
						<TableCell key={timeArrive[i]} className="text-input">
							{timeArrive[i]}
						</TableCell>
						<TableCell
							key={timeDelay[i]}
							className="text-right text-input"
						>
							{<DefineColor value={timeDelay[i]} mode="badge" />}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

interface IStatisticAvaibleTrucks
	extends Pick<IStatisticDelayedDelivery, "truck" | "destination"> {
	workload: number[]; // percentage
}

interface ITruckInfo {
	destination: string;
	truck: string;
	workload: number;
}
const TruckInfo: React.FC<ITruckInfo> = ({ destination, truck, workload }) => {
	const mainColor = getColorClass(workload);
	return (
		<div className="flex justify-between py-2 pr-3  border-accent/70 border-b-2 ">
			<div className="flex flex-col items-start">
				<h3 className="font-bold text-primary text-xl">{truck}</h3>
				<p className="text-muted-foreground text-[12px]">
					{destination}
				</p>
			</div>

			<div className="flex flex-col items-end gap-2">
				<h3 className={cn(`text-${mainColor} font-medium`)}>
					{workload}
					<span className="text-muted-foreground font-normal">
						/100 %
					</span>
				</h3>

				<div className="flex items-center w-full min-w-[100px]">
					<div
						className={cn(
							`w-[${workload}%]  h-1 rounded-l-2xl`,
							`bg-${mainColor}`
						)}
						style={{ width: `${workload}%` }}
					/>
					<div
						className={`w-[${
							100 - workload
						}%] bg-muted-foreground/40 h-1 rounded-r-2xl`}
						style={{ width: `${100 - workload}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

const StatisticAvaibleTrucks: React.FC<IStatisticAvaibleTrucks> = ({
	destination,
	truck,
	workload,
}) => {
	const length = destination.length;
	const ARR = Array.from({ length }, (_, index) => index);

	return (
		<div className="overflow-auto">
			{ARR.map((i) => (
				<TruckInfo
					key={destination[i] + "-" + truck[i] + "-" + workload[i]}
					destination={destination[i]}
					truck={truck[i]}
					workload={workload[i]}
				/>
			))}
		</div>
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
	const widgetToRender: Record<WidgetType, JSX.Element> = {
		"Delayed delivery": (
			<StatisticDelayedDelivery
				destination={[
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
				]}
				truck={[
					"B435324",
					"B438987",
					"B435324",
					"B435324",
					"B438987",
					"B435324",
				]}
				timeArrive={[
					"07:05 AM",
					"10:05 AM",
					"11:40 AM",
					"07:05 AM",
					"10:05 AM",
					"11:40 AM",
				]}
				timeDelay={[
					"05:05 h",
					"02:05 h",
					"00:35 h",
					"05:05 h",
					"02:05 h",
					"00:35 h",
				]}
			/>
		),
		"Availbe trucks": (
			<StatisticAvaibleTrucks
				destination={[
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
				]}
				truck={[
					"B435324",
					"B438987",
					"B435324",
					"B435324",
					"B438987",
					"B435324",
				]}
				workload={[99, 70, 50, 40, 20, 10]}
			/>
		),
	};
	return (
		<Layout
			size="small"
			className={cn(
				"flex flex-col gap-y-4 bg-accent-foreground rounded-2xl px-8 py-10 w-full max-h-[300px]",
				className
			)}
		>
			<StatisticHeader
				title={title}
				typeOfWidget={typeOfWidget}
				currentDate={currentDate}
				options={options}
				link={link}
			/>
			{widgetToRender[typeOfWidget]}
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

	const createHugeCards = (
		title: WidgetType,
		typeOfWidget: WidgetType,
		link?: string,
		currentDate?: string,
		options?: string[]
	) => ({
		title,
		typeOfWidget,
		link: link === "" ? undefined : link,
		currentDate,
		options,
	});

	const HUGE_CARDS = [
		createHugeCards("Delayed delivery", "Delayed delivery", "/"),
		createHugeCards(
			"Daily plan",
			"Daily plan",
			"",
			formatDate(currentDate, {
				weekday: "short",
				day: "2-digit",
				month: "short",
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			}),
			["Daily plan", "Weekly plan", "Monthly plan"]
		),
		createHugeCards("Availbe trucks", "Availbe trucks", "/"),
		createHugeCards("Recent requests", "Recent requests", "/"),
	];

	return (
		<PageLayout className="pb-0" layoutClassName="pb-0">
			<h1 className="text-primary text-2xl font-medium tracking-wide h-full ">
				Overview
			</h1>
			<div className="space-y-4 h-full">
				<section className="flex overflow-x-auto pb-2 scrollbar-hide gap-4">
					{CARDS.map((card, index) => (
						<div key={index} className="min-w-[150px] flex-1">
							<InfoCard {...card} className="shadow-xl h-full" />
						</div>
					))}
				</section>

				<section className="grid grid-cols-2 gap-4">
					{HUGE_CARDS.map((props) => (
						<StatisticCard {...props} />
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
