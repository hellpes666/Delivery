import { cn } from "../utils";

export const getBadgeClass = (delay: number): string => {
	const aliasClassName = "py-1 px-2 font-medium rounded-[8px]";
	if (delay < 1) {
		return cn("bg-emerald-200 text-emerald-700", aliasClassName);
	} else if (delay < 3) {
		return cn("bg-orange-200 text-orange-700", aliasClassName);
	} else {
		return cn("bg-red-200 text-red-700", aliasClassName);
	}
};
