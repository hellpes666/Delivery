export const getColorClassByValue = (value: number): string => {
	if (value > 75) {
		return "red-700";
	} else if (value > 45) {
		return "orange-700";
	} else {
		return "emerald-700";
	}
};
