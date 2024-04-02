import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/apiSlice";
import UserSlice from "./features/User/UserSlice";
import dataReducer from "../redux/features/slice/InvoiceIdsSlice/InvoiceIdsSlice";
import servicesIdsReducer from "../redux/features/slice/Complaints service Ids for payment/ComplaintsServicePaymentIds";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    [baseApi.reducerPath]: baseApi.reducer,
    data: dataReducer,
    complaintsServiceIds: servicesIdsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
