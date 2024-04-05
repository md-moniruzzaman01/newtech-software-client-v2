import { baseApi } from "../../api/apiSlice";

const BillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
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
    }),
    getPaindingBills: builder.query({
      query: (params) => {
        return {
          url: `/bill?status=pending${params?.query}`,
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
    }),
    

  }),
});

export const {useCreateBillMutation,useGetBillsQuery,useGetBillByIdQuery,useDeleteBillMutation,useGetPaindingBillsQuery } = BillApi;
