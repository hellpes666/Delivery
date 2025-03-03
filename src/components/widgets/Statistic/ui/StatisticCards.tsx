import { IStatisticCard } from "@/components/features/Statistic/model/statisticCard";
import StatisticHeader from "@/components/features/Statistic/ui/StatisticHeader";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import { WidgetType } from "../model/widgetType";
import { Layout } from "@/components/app";
import {
	StatisticAvaibleTrucks,
	StatisticDelayedDelivery,
} from "@/components/features/Statistic/ui";

// interface IPlan {
// 	shipmentsPlan: number;
// 	shipmentsProcesseed: number;

// 	ordersPlan: number;
// 	ordersProcessed: number;

// 	reuestsConsidered: number;
// 	reuestsPlan: number;
// }

// interface IStatisticTimePlan {
// 	dailyPlan: IPlan;
// 	weeklyPlan: IPlan;
// 	monhtlyPlan: IPlan;
// }

// const StatisticTimePlan: React.FC<IStatisticTimePlan> = ({
// 	dailyPlan,
// 	weeklyPlan,
// 	monhtlyPlan,
// }) => {

// 	const PlanInfo: React.FC<{
// 		title: string;
// 		planValue: number;
// 		dateValue: number;
// 	}> = ({ title, planValue, dateValue }) => {
// 		return (
// 			<>
// 				<h4 className="text-muted/80 text-md">{title}</h4>
// 				<p className="font-bold text-primary">
// 					{dateValue}
// 					<span className="text-muted/80 font-normal">
// 						{planValue}
// 					</span>
// 				</p>
// 			</>
// 		);
// 	};

// 	return (
// 		<div className="flex justify-between items-center">
// 			<div className="flex flex-col items-start gap-2"></div>
// 		</div>
// 	);
// };

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
		"Available trucks": (
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
				"flex flex-col gap-y-4 bg-accent-foreground rounded-2xl px-8 py-10 w-full max-h-[350px] lg:max-h-[420px]",
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

export default StatisticCard;
