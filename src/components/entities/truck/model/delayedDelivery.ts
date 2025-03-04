import { ITruck } from "./truck";

export interface IStatisticDelayedDelivery extends ITruck {
	timeArrive: string[];
	timeDelay: string[];
}
