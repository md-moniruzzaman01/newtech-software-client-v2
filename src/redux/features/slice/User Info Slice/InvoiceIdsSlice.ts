// Import necessary dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "./config/types";

// Define the initial state for user information

const initialState: UserInfo = {
  name: {
    firstName: "",
    lastName: "",
    middleName: "",
    _id: "",
  },
  email: "",
  age: 0,
  skill: [],
  asp: [],
  branch: "",
  contactNo: "",
  createdAt: "",
  designation: "",
  id: "",
  power: [],
  profileImage: "",
  score: 0,
  updatedAt: "",
  __v: 0,
  _id: "",
};

// Create a slice for user information
const userSlice = createSlice({
  name: "userInfo",
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
