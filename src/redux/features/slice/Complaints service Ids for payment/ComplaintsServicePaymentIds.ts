// dataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "./config/types";

const initialState: DataState = {
  serviceAllIds: [],
};

const complaintServiceIdsSlice = createSlice({
  name: "servicesIds",
  initialState,
  reducers: {
    setIds(state, action: PayloadAction<string[]>) {
      state.serviceAllIds = action.payload;
    },
  },
});

export const { setIds } = complaintServiceIdsSlice.actions;
export default complaintServiceIdsSlice.reducer;
