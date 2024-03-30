import { baseApi } from "../../api/apiSlice";

const RepairApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    assignEngineer: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/repair/multiple",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "repair"],
    }),
    getProductsForRepair: builder.query({
      query: (params) => {
        return {
          url: `/product?warranty=true&repair_status=QC%20Ok`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getOldQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),

    getQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library/${params?.id}?status=QC&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),
  }),
});

export const { useGetProductsForRepairQuery,useAssignEngineerMutation} = RepairApi;
