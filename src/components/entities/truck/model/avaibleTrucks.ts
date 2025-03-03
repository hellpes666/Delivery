import { IStatisticDelayedDelivery } from "./delayedDelivery";

export interface IStatisticAvaibleTrucks
	extends Pick<IStatisticDelayedDelivery, "truck" | "destination"> {
	workload: number[]; // percentage
}