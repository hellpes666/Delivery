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
import { getColorClassByValue } from "@/lib/custom/getColorByValue";

interface IPlan {
	shipments: {
		plan: number;
		processeed: number;
	};

	orders: {
		plan: number;
		processeed: number;
	};

	requests: {
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
	const [currentPercentage, setCurrentPercentage] = useState(0);

	useEffect(() => {
		if (planOptionSelector) {
			const currentTable = matchingTable[planOptionSelector];
			setCurrentPlan(currentTable);

			const shipmentsPercentage =
				currentTable.shipments.plan > 0
					? Math.floor(
							(currentTable.shipments.processeed /
								currentTable.shipments.plan) *
								100
					  )
					: 0;

			const ordersPercentage =
				currentTable.orders.plan > 0
					? Math.floor(
							(currentTable.orders.processeed /
								currentTable.orders.plan) *
								100
					  )
					: 0;

			const requestsPercentage =
				currentTable.requests.plan > 0
					? Math.floor(
							(currentTable.requests.processeed /
								currentTable.requests.plan) *
								100
					  )
					: 0;

			const totalPercentage = Math.floor(
				(shipmentsPercentage + ordersPercentage + requestsPercentage) /
					3
			);

			setCurrentPercentage(totalPercentage);

			setCurrentPercentage(totalPercentage);
		}
	}, [planOptionSelector]);

	const PlanInfo: React.FC<{
		title: string;
		planValue: number;
		dateValue: number;
	}> = ({ title, planValue, dateValue }) => {
		return (
			<div className="flex flex-col gap-0.5 items-center xl:items-start text-center xl:text-start">
				<h4 className="text-muted/80 text-sm xl:text-md font-medium">
					{title}
				</h4>
				<p className="text-[12px] xl:text-lg font-bold text-primary">
					{dateValue}
					<span className="text-muted/80 font-medium">
						/{planValue}
					</span>
				</p>
			</div>
		);
	};

	const mainColor = getColorClassByValue(currentPercentage);

	return (
		<div className="flex flex-col justify-between items-center h-full border-t-1 border-muted-foreground/25 xl:flex-row">
			<div className="flex flex-row xl:flex-col items-center justify-between mt-2 xl:h-full xl:mt-5 xl:items-start">
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
					planValue={currentPlan.requests.plan}
					dateValue={currentPlan.requests.processeed}
				/>
			</div>
			<div
				className="w-full bg-transparent max-w-[60%] xl:max-w-[40%] h-[50%] rounded-t-full border-12 border-b-0 border-muted-foreground/30 mx-auto relative z-0"
				style={{
					borderColor:
						mainColor === "red-700"
							? "#00A550"
							: mainColor === "orange-700"
							? "#F3A505"
							: "#ff1d4b",
				}}
			>
				<h4 className="font-medium text-muted-foreground absolute -left-3 bottom-[-25px]">
					0%
				</h4>
				<h4>{currentPercentage}</h4>
				<h4 className="font-medium text-muted-foreground absolute -right-8 bottom-[-25px]">
					100%
				</h4>
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
			plan: 2020,
			processeed: 1010,
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
			processeed: 4800,
		},
		orders: {
			plan: 3500,
			processeed: 3000,
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
