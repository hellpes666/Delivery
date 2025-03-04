import { ITruck } from "./truck";

export interface IRecentRequets extends Pick<ITruck, "destination"> {
	request: string[];
	requestDate: Date[];
}
