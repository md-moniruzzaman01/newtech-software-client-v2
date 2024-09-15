import { baseApi } from "../../api/apiSlice";

const InventoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postInventoryParts: builder.mutation({
      query: (brand) => ({
        url: "/brand",
        method: "POST",
        body: brand,
      }),
      invalidatesTags: ["inventory"],
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
      invalidatesTags: ["inventory"],
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
      invalidatesTags: ["inventory"],
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
      providesTags: ["inventory"],
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

      providesTags: ["inventory"],
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
      providesTags: ["inventory"],
    }),
    getInventoryPartsById: builder.query({
      query: ({ id, token }) => {
        return {
          url: `/parts/${id}`,
          headers: {
            authorization: token,
          },
        };
      },

      providesTags: ["inventory"],
    }),

    // need to change this api
    getSwap: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/complaints?${query}`,
          headers: {
            authorization: token,
          },
        };
      },

      providesTags: [],
    }),
    // need to change this api
    getBadParts: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/complaints?${query}`,
          headers: {
            authorization: token,
          },
        };
      },

      providesTags: [],
    }),
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
  useGetSwapQuery,
  useGetBadPartsQuery,
} = InventoryApi;
