import { createCard, createHugeCards } from "../lib/createCards";
import { formatDate } from "../lib/formatDate";

export const CARDS = [
	createCard("New packages", 222),
	createCard("Waiting", 60),
	createCard("In transit", 2000),
	createCard("Delivered", 3600),
];

export const HUGE_CARDS = [
	createHugeCards("Delayed delivery", "Delayed delivery", "/"),
	createHugeCards(
		"Daily plan",
		"Daily plan",
		"",
		formatDate(new Date(), {
			weekday: "short",
			day: "2-digit",
			month: "short",
			hour: undefined,
			minute: undefined,
			hour12: false,
		}),
		["Daily plan", "Weekly plan", "Monthly plan"]
	),
	createHugeCards("Availbe trucks", "Availbe trucks", "/"),
	createHugeCards("Recent requests", "Recent requests", "/"),
];
