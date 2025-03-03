import { IInfoCard } from "@/components/widgets/InfoCard/ui/InfoCard";
import { WidgetType } from "@/components/widgets/Statistic/model/widgetType";
import { LuPackageSearch } from "react-icons/lu";

export const createCard = (title: string, info: number): IInfoCard => ({
	title,
	info,
	icon: <LuPackageSearch className="text-accent-foreground size-6" />,
	className: "shadow-xl",
});


export const createHugeCards = (
		title: WidgetType,
		typeOfWidget: WidgetType,
		link?: string,
		currentDate?: string,
		options?: string[]
	) => ({
		title,
		typeOfWidget,
		link: link === "" ? undefined : link,
		currentDate,
		options,
	});