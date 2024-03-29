/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    serviceAdd: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/create-service",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
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

export const { useServiceAddMutation } = ServiceApi;
