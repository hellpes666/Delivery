import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Table,
} from "@/components/ui/table";
import { DefineColor } from "@/lib/custom/defineColor";
import { IStatisticDelayedDelivery } from "../../../entities/truck/model/delayedDelivery";
import { v4 as uuidv4 } from "uuid";

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
					<TableRow key={uuidv4()}>
						<TableCell
							key={uuidv4()}
							className="font-medium text-input"
						>
							{destination[i]}{" "}
						</TableCell>
						<TableCell key={uuidv4()} className="text-input">
							{truck[i]}
						</TableCell>
						<TableCell key={uuidv4()} className="text-input">
							{timeArrive[i]}
						</TableCell>
						<TableCell
							key={uuidv4()}
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

export default StatisticDelayedDelivery;
