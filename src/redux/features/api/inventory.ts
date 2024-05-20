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
      query: ({ id, token, fullData }) => ({
        url: `/parts/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    inventoryReject: builder.mutation({
      query: ({ id, token, fullData }) => ({
        url: `/parts/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getInventoryParts: builder.query({
      query: (params) => {
        return {
          url: `/parts?status=pending&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getInventoryPartsAll: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/parts?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getInventoryPartsApprove: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/parts?status=Approve&${query}`,
          headers: {
            authorization: token,
          },
        };
      },
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
  useGetInventoryPartsApproveQuery,
  useGetInventoryPartsAllQuery,
  useGetInventoryPartsQuery,
  usePostInventoryPartsMutation,
  useGetInventoryPartsByIdQuery,
  useInventoryApproveMutation,
  useInventoryRejectMutation,
} = InventoryApi;
