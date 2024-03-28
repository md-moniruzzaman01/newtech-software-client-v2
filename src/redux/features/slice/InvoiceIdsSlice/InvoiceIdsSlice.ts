// dataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "./config/types";

const initialState: DataState = {
  checkedRows: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<string[]>) {
      state.checkedRows = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
