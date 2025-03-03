import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import optionSlice from "./slices/planOptionSlice";

export const store = configureStore({
	reducer: {
		theme: themeSlice,
		planOption: optionSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
