import { baseApi } from "../../api/apiSlice";

const QCApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createQC: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qc/multiple",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getQC: builder.query({
      query: () => "/brand",
    }),
    // updatePost: builder.mutation({
    //   query: ({ postId, updatedPost }) => ({
    //     url: `/posts/${postId}`,
    //     method: "PUT",
    //     body: updatedPost,
    //   }),
    // }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useCreateQCMutation, useGetQCQuery } = QCApi;
