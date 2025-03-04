import TruckInfo from "@/components/entities/truck/ui/TruckInfo";
import { IStatisticAvaibleTrucks } from "../../../entities/truck/model/avaibleTrucks";
import { createEmptyArrayWithArgLength } from "@/components/shared/lib/createEmptyArrayWithArgLength";

const StatisticAvaibleTrucks: React.FC<IStatisticAvaibleTrucks> = ({
	destination,
	truck,
	workload,
}) => {
	const ARR = createEmptyArrayWithArgLength(destination);

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
