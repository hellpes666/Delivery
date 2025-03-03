import { getBadgeClass } from "./getBadgeClass";
import { getColorClassByValue } from "./getColorByValue";

export interface DefineColorProps {
	value: string;
	mode: "badge" | "color";
}

export const DefineColor: React.FC<DefineColorProps> = ({ value, mode }) => {
	const parsedValue = Number(value.split(" ")[0].split(":")[0]);

	if (mode === "badge") {
		return <span className={getBadgeClass(parsedValue)}>{value}</span>;
	} else {
		const curValue = Number(value);
		return getColorClassByValue(curValue);
	}
};
