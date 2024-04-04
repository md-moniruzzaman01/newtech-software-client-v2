/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    serviceAdd: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints/create-service",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getServices: builder.query({
      query: (params) => {
        return {
          url: `/complaints/services?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getServicesById: builder.query({
      query: (params) => {
        return {
          url: `/complaints/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

    createBill: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/bill/create",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),

    getBillById: builder.query({
      query: (params) => {
        return {
          url: `/bill/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

    // updatePost: builder.mutation({
    //   query: ({ postId, updatedPost }) => ({
    //     url: `/posts/${postId}`,
    //     method: "PUT",
    //     body: updatedPost,
    //   }),
    // }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({a
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useServiceAddMutation,
  useGetServicesByIdQuery,
  useGetServicesQuery,
  useCreateBillMutation,
  useGetBillByIdQuery,
} = ServiceApi;
