import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v2",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/posts",
    }),
    complaintAdd: builder.mutation({
      query: (newPost) => ({
        url: "/complaints/create",
        method: "POST",
        body: newPost,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ postId, updatedPost }) => ({
        url: `/posts/${postId}`,
        method: "PUT",
        body: updatedPost,
      }),
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useComplaintAddMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = baseApi;

export default baseApi;
