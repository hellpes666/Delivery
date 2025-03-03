import { PlanOptions } from "@/components/app/store/slices/planOptionSlice";
import { createCard, createHugeCards } from "../lib/createCards";
import { formatDate } from "../lib/formatDate";

export const CARDS = [
	createCard("New packages", 222),
	createCard("Waiting", 60),
	createCard("In transit", 2000),
	createCard("Delivered", 3600),
];


export const getFormattedDateForPlan = (planOption: PlanOptions): string => {
	const currentDate = new Date();

	if (planOption === "Daily plan") {
		return formatDate(currentDate, {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		});
	}

	if (planOption === "Weekly plan") {
		const startOfWeek = new Date(currentDate);
		const endOfWeek = new Date(startOfWeek);
		startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
		endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

		const formattedStartOfWeek = formatDate(startOfWeek, {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		});

		const formattedEndOfWeek = formatDate(endOfWeek, {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		});

		return `${formattedStartOfWeek} - ${formattedEndOfWeek}`;
	}

	if (planOption === "Monthly plan") {
		const startOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			1
		);
		const endOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0
		); 

		const formattedStartOfMonth = formatDate(startOfMonth, {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		});

		const formattedEndOfMonth = formatDate(endOfMonth, {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		});

		return `${formattedStartOfMonth} - ${formattedEndOfMonth}`;
	}

	return "";
};

export const HUGE_CARDS = [
	createHugeCards("Delayed delivery", "Delayed delivery", "/"),
	createHugeCards(
		"Daily plan",
		"Daily plan",
		"",
		["Daily plan", "Weekly plan", "Monthly plan"]
	),
	createHugeCards("Available trucks", "Available trucks", "/"),
	createHugeCards("Recent requests", "Recent requests", "/"),
];
