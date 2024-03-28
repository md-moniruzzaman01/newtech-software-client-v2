import { baseApi } from "../../api/apiSlice";

const QCApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createQC: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qualtity-check",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getQcs: builder.query({
      query: (params) => {
        console.log(`/qualtity-check?${params?.query}`);
        return {
          url: `/qualtity-check?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getQC: builder.query({
      query: () => "/brand",
    }),
    getProducts: builder.query({
      query: (params) => {
        console.log(`/product?${params?.query}`);
        // console.log(params);
        return {
          url: `/product?${params?.query}`,
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
    //   query: (postId) => ({
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useCreateQCMutation,useGetQcsQuery,useGetProductsQuery, useGetQCQuery } = QCApi;
