export const formatDate = (
	currentDate: Date,
	options: {
		weekday: "short" | undefined;
		day: "2-digit" | undefined;
		month: "short" | undefined;
		hour: "2-digit" | undefined;
		minute: "2-digit" | undefined;
		hour12: false;
	}
): string => {
	return currentDate.toLocaleString("en-US", options).replace(/,/g, ",");
};
