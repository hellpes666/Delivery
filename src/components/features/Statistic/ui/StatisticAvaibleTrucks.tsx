import TruckInfo from "@/components/entities/truck/ui/TruckInfo";
import { IStatisticAvaibleTrucks } from "../../../entities/truck/model/avaibleTrucks";

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

export default StatisticAvaibleTrucks;
