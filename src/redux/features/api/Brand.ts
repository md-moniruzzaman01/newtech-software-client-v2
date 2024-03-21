import { baseApi } from "../../api/apiSlice";

const BrandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createBrand: builder.mutation({
      query: (brand) => ({
        url: "/brand",
        method: "POST",
        body: brand,
      }),
    }),
    getBrands: builder.query({
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

export const { useCreateBrandMutation, useGetBrandsQuery } = BrandApi;
