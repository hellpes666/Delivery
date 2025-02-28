import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/app/store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					{ROUTES.map((page, index) => (
						<Route
							key={`route-${index}`}
							path={page.path}
							element={page.element}
						/>
					))}
				</Routes>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
