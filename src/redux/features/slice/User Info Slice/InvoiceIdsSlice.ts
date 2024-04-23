// Import necessary dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "./config/types";

// Define the initial state for user information

const initialState: UserInfo = {
  name: "",
  email: "",
  age: 0,
};

// Create a slice for user information
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserInfo>) {
      return { ...state, ...action.payload };
    },
    // Add other reducers as needed
  },
});

// Export actions and reducer
export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
