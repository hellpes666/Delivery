import { InfoRow } from "@/components/shared/ui";
import { getColorClassByValue } from "@/lib/custom/getColorByValue";
import { cn } from "@/lib/utils";

interface ITruckInfo {
	destination: string;
	truck: string;
	workload: number;
}
const TruckInfo: React.FC<ITruckInfo> = ({ destination, truck, workload }) => {
	const mainColor = getColorClassByValue(workload);
	return (
		<InfoRow title={truck} subtitle={destination}>
			<div className="flex flex-col items-end gap-2">
				<h3
					className={cn(`text-${mainColor} font-medium`)}
					style={{
						color:
							mainColor === "red-700"
								? "#CC0029"
								: mainColor === "orange-700"
								? "#F3A505"
								: "#00A550",
					}}
				>
					{workload}
					<span className="text-muted-foreground font-normal">
						/100 %
					</span>
				</h3>

				<div className="flex items-center w-full min-w-[100px]">
					<div
						className={cn(`w-[${workload}%]  h-1 rounded-l-2xl`)}
						style={{
							width: `${workload}%`,
							backgroundColor:
								mainColor === "red-700"
									? "#CC0029"
									: mainColor === "orange-700"
									? "#F3A505"
									: "#00A550",
						}}
					/>
					<div
						className={`w-[${
							100 - workload
						}%] bg-muted-foreground/40 h-1 rounded-r-2xl`}
						style={{ width: `${100 - workload}%` }}
					/>
				</div>
			</div>
		</InfoRow>
	);
};

export default TruckInfo;
