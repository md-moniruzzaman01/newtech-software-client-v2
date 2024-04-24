/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const WithdrawSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWithdraw: builder.query({
      query: ({ token }) => {
        return {
          url: `/transactions`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    createWithdraw: builder.mutation({
      query: ({ fullData, token }) => ({
        url: `/transactions/create`,
        method: "PUT",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    // getAdmin: builder.query({
    //   query: (params) => {
    //     return {
    //       url: `/admin/${params?.query}`,
    //       headers: {
    //         authorization: params?.token,
    //       },
    //     };
    //   },
    // }),

    // getBillById: builder.query({
    //   query: (params) => {
    //     return {
    //       url: `/bill/${params?.id}`,
    //       headers: {
    //         authorization: params?.token,
    //       },
    //     };
    //   },
    // }),

    // deletePost: builder.mutation({
    //   query: (postId) => ({a
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useGetWithdrawQuery, useCreateWithdrawMutation } = WithdrawSlice;