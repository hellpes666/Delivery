import {
	Main,
	Requests,
	Notifications,
	Dashboard,
	Parcels,
	Branches,
	Clients,
} from "./components/app/pages";

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
