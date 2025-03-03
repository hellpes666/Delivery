import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PlanOptions = "Daily plan" | "Weekly plan" | "Monthly plan";

interface PlanState {
	option: PlanOptions;
}

const initialState: PlanState = {
	option: "Daily plan",
};

export const optionSlice = createSlice({
	name: "planOption",
	initialState,
	reducers: {
		setOption: (state, action: PayloadAction<PlanOptions>) => {
			state.option = action.payload
		},
	},
});

export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;
