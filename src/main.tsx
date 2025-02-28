import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/app/store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import {
	Branches,
	Clients,
	Dashboard,
	Main,
	Notifications,
	Parcels,
	Requests,
} from "./components/app/pages/index.ts";

const ROUTES = [
	{
		path: "/",
		element: <Main />,
	},
	{ path: "/requests", element: <Requests /> },
	{ path: "/notifications", element: <Notifications /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/parcels", element: <Parcels /> },
	{ path: "/branches", element: <Branches /> },
	{ path: "/clients", element: <Clients /> },
];

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					{ROUTES.map((page) => (
						<Route path={page.path} element={page.element} />
					))}
				</Routes>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
