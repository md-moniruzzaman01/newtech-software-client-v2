import { baseApi } from "../../api/apiSlice";

const PrincipleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // partner section
    createPrinciple: builder.mutation({
      query: () => ({
        url: "/user/create-principle",
        method: "POST",
      }),
    }),
    getPrinciples: builder.query({
      query: () => "/principle",
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

export const { useCreatePrincipleMutation,useGetPrinciplesQuery } = PrincipleApi;