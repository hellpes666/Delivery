import { WidgetType } from "@/components/widgets/Statistic/model/widgetType";

export interface IStatisticCard {
	title: string;
	currentDate?: string;
	link?: string;
	options?: string[];
	typeOfWidget: WidgetType;
	className?: string;
}
