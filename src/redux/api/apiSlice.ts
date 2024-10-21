import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../shared/config/secret.ts";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  tagTypes: [
    "complaints",
    "products",
    "brand_category",
    "category",
    "repair",
    "qc",
    "qa",
    "bill",
    "notifications",
    "partners",
    "inventory",
    "engineer",
  ],
  endpoints: () => ({}),
});

//http://localhost:5000/api/v2/
//http://16.16.166.48:5000/api/v2/
//https://nt.necgroupbd.net/
