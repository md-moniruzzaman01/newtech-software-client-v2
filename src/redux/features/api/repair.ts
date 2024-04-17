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
          url: `/product?warranty=true&repair_status=QC%20Ok&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
    getServiceProductsForRepair: builder.query({
      query: (params) => {
        console.log(`/product?warranty=false&repair_status=Received&repair_status=Return%20to%20library&${params?.query}`)
        return {
          url: `/product?warranty=false&repair_status=Received&repair_status=Return%20to%20library&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
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
    getRepairById: builder.query({
      query: (params) => {
        console.log(`/repair/${params.id}`)
        return {
          url: `/repair/${params.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

  }),
});

export const { useGetProductsForRepairQuery,
  useAssignEngineerMutation,
  useGetOldRepairsQuery,
  useGetRepairsQuery,
  useGetAllRepairsQuery,
  useGetRepairByIdQuery,
  useGetServiceProductsForRepairQuery
} = RepairApi;
