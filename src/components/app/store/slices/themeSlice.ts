import { createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

const addThemeToSessionStorage = (themeState: Theme) => {
	sessionStorage.setItem("theme", themeState);
};

export interface ThemeState {
	theme: Theme;
}
const initialState: ThemeState = {
	theme: (sessionStorage.getItem("theme") as Theme) || "light",
};

const defineNewTheme = (theme: Theme): Theme => {
	return theme === "light" ? "dark" : "light";
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state) => {
			const newTheme = defineNewTheme(state.theme);
			state.theme = newTheme;

			addThemeToSessionStorage(newTheme);
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
