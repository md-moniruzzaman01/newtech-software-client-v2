import { baseApi } from "../../api/apiSlice";

const BillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createBill: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qc/multiple",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getBill: builder.query({
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

export const { useCreateBillMutation, useGetBillQuery } = BillApi;
