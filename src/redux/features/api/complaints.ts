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
  useGetComplaintByIdQuery
} = ComplaintsApi;
