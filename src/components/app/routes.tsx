import { JSX } from "react";
import {
	Main,
	Requests,
	Notifications,
	Dashboard,
	Parcels,
	Branches,
	Clients,
} from "./pages";
interface RouteConfig {
	path: string;
	element: JSX.Element;
	title: string;
}
export const ROUTES_2: RouteConfig[] = [
	{
		path: "/",
		element: <Main />,
		title: "",
	},
	{
		path: "/requests",
		element: <Requests />,
		title: "Requests",
	},
	{
		path: "/notifications",
		element: <Notifications />,
		title: "Notifications",
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		title: "Dashboard",
	},
	{
		path: "/parcels",
		element: <Parcels />,
		title: "Parcels",
	},
	{
		path: "/branches",
		element: <Branches />,
		title: "Branches",
	},
	{
		path: "/clients",
		element: <Clients />,
		title: "Clients",
	},
];

export const ROUTES = [
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/requests",
		element: <Requests />,
	},
	{
		path: "/notifications",
		element: <Notifications />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/parcels",
		element: <Parcels />,
	},
	{
		path: "/branches",
		element: <Branches />,
	},
	{
		path: "/clients",
		element: <Clients />,
	},
];
