import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v2/",
  }),
  tagTypes: ["complaints", "brand_category", "category", "repair", "qc", "qa"],
  endpoints: () => ({}),
});
// http://16.16.166.48:5000/api/v2
