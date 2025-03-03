import { IStatisticCard } from "@/components/features/Statistic/model/statisticCard";
import StatisticHeader from "@/components/features/Statistic/ui/StatisticHeader";
import { cn } from "@/lib/utils";
import { JSX, useEffect, useState } from "react";
import { WidgetType } from "../model/widgetType";
import { Layout } from "@/components/app";
import {
	StatisticAvaibleTrucks,
	StatisticDelayedDelivery,
} from "@/components/features/Statistic/ui";
import { RootState } from "@/components/app/store/store";
import { useSelector } from "react-redux";
import { PlanOptions } from "@/components/app/store/slices/planOptionSlice";

interface IPlan {
	shipments: {
		plan: number;
		processeed: number;
	};

	orders: {
		plan: number;
		processeed: number;
	};

	reuests: {
		plan: number;
		processeed: number;
	};
}

interface IStatisticTimePlan {
	dailyPlan: IPlan;
	weeklyPlan: IPlan;
	monhtlyPlan: IPlan;
}

const StatisticTimePlan: React.FC<IStatisticTimePlan> = ({
	dailyPlan,
	weeklyPlan,
	monhtlyPlan,
}) => {
	const matchingTable: Record<PlanOptions, IPlan> = {
		"Daily plan": dailyPlan,
		"Weekly plan": weeklyPlan,
		"Monthly plan": monhtlyPlan,
	};

	const planOptionSelector = useSelector(
		(state: RootState) => state.planOption.option
	);

	const [currentPlan, setCurrentPlan] = useState<IPlan>(
		matchingTable[planOptionSelector]
	);

	useEffect(() => {
		if (planOptionSelector) {
			setCurrentPlan(matchingTable[planOptionSelector]);
		}
	}, [planOptionSelector]);

	const PlanInfo: React.FC<{
		title: string;
		planValue: number;
		dateValue: number;
	}> = ({ title, planValue, dateValue }) => {
		return (
			<div className="flex flex-col gap-0.5 items-start">
				<h4 className="text-muted/80 text-md font-medium">{title}</h4>
				<p className="text-lg font-bold text-primary">
					{dateValue}
					<span className="text-muted/80 font-medium">
						/{planValue}
					</span>
				</p>
			</div>
		);
	};

	return (
		<div className="flex justify-between items-center h-full border-t-1 border-muted-foreground/25">
			<div className="flex flex-col items-start justify-between h-full mt-5">
				<PlanInfo
					title="Shipments processed"
					planValue={currentPlan.shipments.plan}
					dateValue={currentPlan.shipments.processeed}
				/>
				<PlanInfo
					title="Orders processed"
					planValue={currentPlan.orders.plan}
					dateValue={currentPlan.orders.processeed}
				/>
				<PlanInfo
					title="Requests considered"
					planValue={currentPlan.reuests.plan}
					dateValue={currentPlan.reuests.processeed}
				/>
			</div>
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
	const mockDailyPlan: IPlan = {
		shipments: {
			plan: 1010,
			processeed: 2020,
		},
		orders: {
			plan: 650,
			processeed: 1300,
		},
		reuests: {
			plan: 10,
			processeed: 20,
		},
	};

	const mockWeeklyPlan: IPlan = {
		shipments: {
			plan: 5000,
			processeed: 4800,
		},
		orders: {
			plan: 3500,
			processeed: 3000,
		},
		reuests: {
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
		reuests: {
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
