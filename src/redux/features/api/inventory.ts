import { baseApi } from "../../api/apiSlice";

const InventoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postInventoryParts: builder.mutation({
      query: (brand) => ({
        url: "/brand",
        method: "POST",
        body: brand,
      }),
    }),
    inventoryApprove: builder.mutation({
      query: ({ id, token,fullData }) => ({
        url: `/parts/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    inventoryReject: builder.mutation({
      query: ({ id, token,fullData }) => ({
        url: `/parts/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getInventoryParts: builder.query({
      query: () => "/parts",
    }),
    getInventoryPartsById: builder.query({
      query: ({ id }) => `/parts/${id}`,
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
  useGetInventoryPartsQuery,
  usePostInventoryPartsMutation,
  useGetInventoryPartsByIdQuery,
  useInventoryApproveMutation,
  useInventoryRejectMutation,
} = InventoryApi;
