import { baseApi } from "../../api/apiSlice";

const QAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createQA: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qa/multiple",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "qa"],
    }),
    updateStatusQA: builder.mutation({
      query: ({ fullData, token, id }) => ({
        url: `/qa/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "qa"],
    }),

    getOldQas: builder.query({
      query: (params) => {
        return {
          url: `/qa/my-library`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qa"],
    }),
    getQas: builder.query({
      query: (params) => {
        return {
          url: `/qa/my-library?status=QA&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qa"],
    }),
    getQAProducts: builder.query({
      query: (params) => {
        return {
          url: `/product?warranty=true&repair_status=Not%20Repairable&repair_status=Repaired&repair_status=Repair%20Difficulty&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints"],
    }),
    getQAProductsForService: builder.query({
      query: (params) => {
        return {
          url: `/product?warranty=false&repair_status=Not%20Repairable&repair_status=Repaired&repair_status=Repair%20Difficulty&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints"],
    }),
  }),
});

export const {
  useCreateQAMutation,
  useGetOldQasQuery,
  useGetQAProductsQuery,
  useGetQAProductsForServiceQuery,
  useGetQasQuery,
} = QAApi;
