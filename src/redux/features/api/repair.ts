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
    getOldRepairs: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
    getAllRepairs: builder.query({
      query: (params) => {
        return {
          url: `/repair/`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),

    getRepairs: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}?status=Engineer%20Is%20working&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
  }),
});

export const { useGetProductsForRepairQuery,useAssignEngineerMutation,useGetOldRepairsQuery,useGetRepairsQuery,useGetAllRepairsQuery} = RepairApi;
