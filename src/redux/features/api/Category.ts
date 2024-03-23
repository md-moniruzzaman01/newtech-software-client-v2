import { baseApi } from "../../api/apiSlice";

const CategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // category section
    createMainCategory: builder.mutation({
      query: (mainCategory) => ({
        url: "/main/category",
        method: "POST",
        body: mainCategory,
      }),
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: "/category",
        method: "POST",
        body: category,
      }),
    }),
    getMainCategory: builder.query({
      query: () => "/main/category",
    }),
    getCategory: builder.query({
      query: () => "/category",
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
  useCreateMainCategoryMutation,
  useGetMainCategoryQuery,
  useCreateCategoryMutation,
  useGetCategoryQuery,
} = CategoryApi;
