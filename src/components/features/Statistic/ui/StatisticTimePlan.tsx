import { PlanOptions } from "@/components/app/store/slices/planOptionSlice";
import { RootState } from "@/components/app/store/store";
import { getColorClassByValue } from "@/lib/custom/getColorByValue";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PlanInfo from "../components/PlanInfo";
import { calculatePlanPercentage } from "../model/statistics";

export interface IPlan {
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
			const percentage = calculatePlanPercentage(currentTable);
			setCurrentPercentage(percentage);
		}
	}, [planOptionSelector]);

	const mainColor = getColorClassByValue(currentPercentage);

	return (
		<div className="flex flex-col justify-between items-center h-full border-t-1 border-muted-foreground/25 xl:flex-row">
			<div className="flex flex-row xl:flex-col items-center justify-around mt-2 xl:h-full xl:mt-5 xl:items-start">
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
			<svg
				viewBox="-15 -15 120 80"
				className="w-full max-w-[60%] mx-auto"
			>
				<path
					d="M 10,45 A 40 40 0 0 1 90 45"
					stroke="#e0e0e0"
					strokeWidth="8"
					strokeLinecap="round"
					fill="none"
				/>

				<path
					d="M 10,45 A 40 40 0 0 1 90 45"
					stroke={
						mainColor === "red-700"
							? "#00A550"
							: mainColor === "orange-700"
							? "#F3A505"
							: "#ff1d4b"
					}
					strokeWidth="8"
					fill="none"
					strokeLinecap="round"
					strokeDasharray={`${currentPercentage} 100`}
				/>
				<text
					x="18"
					y="58"
					textAnchor="end"
					fontSize="8"
					fill="#666"
					className="font-medium"
				>
					0%
				</text>

				<text
					x="83"
					y="58"
					textAnchor="start"
					fontSize="8"
					fill="#666"
					className="font-medium"
				>
					100%
				</text>
			</svg>
		</div>
	);
};

export default StatisticTimePlan;
