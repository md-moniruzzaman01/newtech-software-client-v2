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
      invalidatesTags: ["complaints"],
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
      providesTags:['complaints']
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
    deleteComplaints: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints",
        method: "DELETE",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'complaints', id: 'LIST' },
        { type: 'complaints', id: arg.id }
      ],
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

    getPartners: builder.query({
      query: (params) => {
        console.log(`/partners?searchTerm=${params?.searchInput}`)
        return {
          url: `/partners?searchTerm=${params?.searchInput}`,
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
  useGetBillByIdQuery,
  useGetPartnersQuery,
  useDeleteComplaintsMutation
} = ServiceApi;
