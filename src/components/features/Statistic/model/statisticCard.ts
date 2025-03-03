import { PlanOptions } from "@/components/app/store/slices/planOptionSlice";
import { WidgetType } from "@/components/widgets/Statistic/model/widgetType";

export interface IStatisticCard {
	title: string;
	currentDate?: string;
	link?: string;
	options?: PlanOptions[];
	typeOfWidget: WidgetType;
	className?: string;
}
