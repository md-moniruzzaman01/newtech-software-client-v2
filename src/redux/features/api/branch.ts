import { baseApi } from "../../api/apiSlice";

const BranchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createBranch: builder.mutation({
      query: (brand) => ({
        url: "/brand",
        method: "POST",
        body: brand,
      }),
    }),
    getBranches: builder.query({
      query: ({ id, token }) => {
        return {
          url: `complaints/data/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getBranchesForService: builder.query({
      query: ({ id, token }) => {
        return {
          url: `complaints/data/services/${id}`,
          headers: {
            authorization: token,
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
    //   query: (postId) => ({
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useCreateBranchMutation,
  useGetBranchesQuery,
  useGetBranchesForServiceQuery,
} = BranchApi;
