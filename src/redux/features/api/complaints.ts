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
        // console.log(`/complaints?${params?.query}`);
        // console.log(params);
        return {
          url: `/complaints?${params?.query}`,
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

export const { useComplaintAddMutation, useGetComplaintsQuery } = ComplaintsApi;
