import { baseApi } from "../../api/apiSlice";

const BrandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createBrand: builder.mutation({
      query: ({ brandData, token }) => ({
        url: "/brand",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: brandData,
      }),
    }),
    getBrands: builder.query({
      query: ({ token }) => ({
        url: "/brand",

        headers: {
          authorization: token,
        },
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
    //   query: (postId) => ({
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useCreateBrandMutation, useGetBrandsQuery } = BrandApi;
