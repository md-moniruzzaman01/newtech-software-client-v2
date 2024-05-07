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
      invalidatesTags: ["complaints"],
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
          url: `/complaints?repair_status=Cancel&repair_status=Reject&repair_status=repair+failed&repair_status=Completed&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
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
          url: `/complaints?repair_status=Buffer&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
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
  useGetComplaintsQuery,
  useGetComplaintByIdQuery,
  useGetMyComplaintQuery,
  useGetReadyForDelivaryComplaintsQuery,
  useGetReadyForDelivaryServicesQuery,
  useGetBuffersQuery,
  useDeleteComplaintsMutation,
  useUpdateComplaintsStatusDeliveryMutation,
  useUpdateComplaintsStatusMutation,
} = ComplaintsApi;
