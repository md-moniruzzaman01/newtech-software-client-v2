/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const ComplaintsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    complaintAdd: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints/create",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "products"],
    }),
    complaintEdit: builder.mutation({
      query: ({ fullData, token, id }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "products"],
    }),
    updateComplaintsStatusDelivery: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints/delivered",
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: { repairIds: fullData },
      }),
      invalidatesTags: ["complaints"],
    }),
    updateComplaintsStatus: builder.mutation({
      query: ({ id, token, fullData }) => ({
        url: `/complaints/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints"],
    }),
    DeleteComplaints: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints",
        method: "DELETE",
        headers: {
          authorization: token,
        },
        body: { repairIds: fullData },
      }),
      invalidatesTags: ["complaints"],
    }),
    CancelComplaints: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/complaints/cancel",
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: { repairIds: fullData },
      }),
      invalidatesTags: ["complaints"],
    }),
    getComplaints: builder.query({
      query: (params) => {
        return {
          url: `/complaints?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints"],
    }),

    getComplaintById: builder.query({
      query: (params) => {
        return {
          url: `/complaints/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints", "products"],
    }),
    getProductById: builder.query({
      query: (params) => {
        return {
          url: `/product/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getMyComplaint: builder.query({
      query: (params) => {
        return {
          url: `/complaints/my-library/${params?.id}?warranty=${params.warranty}&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getReadyForDelivaryComplaints: builder.query({
      query: (params) => {
        return {
          url: `/complaints?repair_status=QC+Failed&repair_status=Cancel&repair_status=Reject&repair_status=repair+failed&repair_status=Completed&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints"],
    }),
    getReadyForDelivaryServices: builder.query({
      query: (params) => {
        return {
          url: `/complaints/services?repair_status=Cancel&repair_status=Reject&repair_status=repair+failed&repair_status=Completed&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getBuffers: builder.query({
      query: (params) => {
        return {
          url: `/product/buffer?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),

    updateBuffers: builder.mutation({
      query: ({ fullData, token }) => {
        console.log(fullData);
        return {
          url: "/complaints/update",
          method: "PATCH",
          headers: {
            authorization: token,
          },
          body: fullData,
        };
      },
      invalidatesTags: ["complaints", "repair"],
    }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({a
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useComplaintAddMutation,
  useGetProductByIdQuery,
  useGetComplaintsQuery,
  useGetComplaintByIdQuery,
  useGetMyComplaintQuery,
  useGetReadyForDelivaryComplaintsQuery,
  useGetReadyForDelivaryServicesQuery,
  useGetBuffersQuery,
  useDeleteComplaintsMutation,
  useUpdateComplaintsStatusDeliveryMutation,
  useUpdateComplaintsStatusMutation,
  useCancelComplaintsMutation,
  useComplaintEditMutation,
  useUpdateBuffersMutation,
} = ComplaintsApi;
