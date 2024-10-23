import { baseApi } from "../../api/apiSlice";

const BillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBill: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/bill/create",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),

    getBills: builder.query({
      query: (params) => {
        return {
          url: `/bill?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["bill"],
    }),

    getPendingBills: builder.query({
      query: (params) => {
        return {
          url: `/bill?status=pending&status=Delivered%20Without%20Payment&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getBillById: builder.query({
      query: (params) => {
        return {
          url: `/bill/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    deleteBill: builder.mutation({
      query: ({ id, token }) => ({
        url: `/bill/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["bill"],
    }),
    servicePayment: builder.mutation({
      query: ({ id, token, fullData }) => ({
        url: `/bill/payment/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["bill"],
    }),

    serviceDeliveredWithOutPayment: builder.mutation({
      query: ({ id, token }) => ({
        url: `/bill/delivered/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["bill"],
    }),
  }),
});

export const {
  useCreateBillMutation,
  useGetBillsQuery,
  useGetBillByIdQuery,
  useDeleteBillMutation,
  useGetPendingBillsQuery,
  useServicePaymentMutation,
  useServiceDeliveredWithOutPaymentMutation,
} = BillApi;
