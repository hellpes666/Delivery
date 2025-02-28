import { JSX } from "react";
import React from "react";

const Main = React.lazy(() => import("./pages/Main"));
const Requests = React.lazy(() => import("./pages/Requests"));
const Notifications = React.lazy(() => import("./pages/Notifications"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Parcels = React.lazy(() => import("./pages/Parcels"));
const Branches = React.lazy(() => import("./pages/Branches"));
const Clients = React.lazy(() => import("./pages/Clients"));

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
