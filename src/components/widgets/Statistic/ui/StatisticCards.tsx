import { IStatisticCard } from "@/components/features/Statistic/model/statisticCard";
import StatisticHeader from "@/components/features/Statistic/ui/StatisticHeader";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import { WidgetType } from "../model/widgetType";
import { Layout } from "@/components/app/ui";
import {
	RecentRequests,
	StatisticAvaibleTrucks,
	StatisticDelayedDelivery,
} from "@/components/features/Statistic/ui";
import StatisticTimePlan, {
	IPlan,
} from "@/components/features/Statistic/ui/StatisticTimePlan";

const StatisticCard: React.FC<IStatisticCard> = ({
	title,
	currentDate,
	link,
	options,
	typeOfWidget,
	className,
}) => {
	const mockDailyPlan: IPlan = {
		shipments: {
			plan: 2020,
			processeed: 500,
		},
		orders: {
			plan: 1300,
			processeed: 650,
		},
		requests: {
			plan: 20,
			processeed: 10,
		},
	};

	const mockWeeklyPlan: IPlan = {
		shipments: {
			plan: 5000,
			processeed: 3000,
		},
		orders: {
			plan: 3500,
			processeed: 2200,
		},
		requests: {
			plan: 500,
			processeed: 450,
		},
	};

	const mockMonthlyPlan: IPlan = {
		shipments: {
			plan: 10000,
			processeed: 9500,
		},
		orders: {
			plan: 8000,
			processeed: 7000,
		},
		requests: {
			plan: 2000,
			processeed: 1800,
		},
	};

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
		"Daily plan": (
			<StatisticTimePlan
				dailyPlan={mockDailyPlan}
				weeklyPlan={mockWeeklyPlan}
				monhtlyPlan={mockMonthlyPlan}
			/>
		),
		"Recent requests": (
			<RecentRequests
				request={[
					"Parcel redirection",
					"Packing problem",
					"Machine breakdown",
					"Parcel redirection",
					"Packing problem",
					"Machine breakdown",
				]}
				destination={[
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
					"Valencia - Barcelona",
					"Cordoba - Barcelona",
					"Seville - Barcelona",
				]}
				requestDate={[
					new Date(new Date().getTime() - 60000), // 1 minute ago
					new Date(new Date().getTime() - 600000), // 10 minutes ago
					new Date(new Date().getTime() - 1200000), // 20 minutes ago
					new Date(new Date().getTime() - 1200000 * 2), // 40 minute ago
					new Date(new Date().getTime() - 1200000 * 4), // 80 minutes ago
					new Date(new Date().getTime() - 1200000 * 8), // 159 minutes ago
				]}
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
