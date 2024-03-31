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
          url: `/qa/my-library/${params?.id}`,
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
          url: `/qa/my-library/${params?.id}?status=QA&${params?.query}`,
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
          url: `/product?${params?.query}`,
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
useCreateQAMutation,useGetOldQasQuery,useGetQAProductsQuery,useGetQasQuery
} = QAApi;