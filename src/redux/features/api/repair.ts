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
          url: `/product?repair_status=QC%20Ok&repair_status=Return%20to%20library&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair", "qc"],
    }),
    getServiceProductsForRepair: builder.query({
      query: (params) => {
        return {
          url: `/product/services?repair_status=Received&repair_status=Return%20to%20library&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["products", "repair"],
    }),
    getOldRepairs: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}?warranty=true&repair_status=Repair%20Difficulty&repair_status=Leak%20material&repair_status=Repaired&repair_status=Not%20Repairable&repair_status=Reject&repair_status=CN&repair_status=CID&repair_status=NTF${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
    getOldRepairsForService: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}?warranty=false&repair_status=Repair%20Difficulty&repair_status=Leak%20material&repair_status=Repaired&repair_status=Not%20Repairable&repair_status=Reject&repair_status=CN&repair_status=CID&repair_status=NTF$${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
    getAllRepairs: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/repair?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["repair"],
    }),

    getRepairs: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}?warranty=true&status=Engineer%20Is%20working&status=Return%20to%20engineer&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),

    getRepairsForService: builder.query({
      query: (params) => {
        return {
          url: `/repair/my-library/${params?.id}?warranty=false&status=Engineer%20Is%20working&status=Return%20to%20engineer&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),

    repairWarrantyReturnToLibrary: builder.mutation({
      query: ({ fullData, token }) => ({
        url: `/repair/return-to-library`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["repair", "qa"],
    }),

    getRepairById: builder.query({
      query: (params) => {
        return {
          url: `/repair/${params.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair", "qa"],
    }),
  }),
});

export const {
  useGetProductsForRepairQuery,
  useAssignEngineerMutation,
  useGetOldRepairsQuery,
  useGetRepairsQuery,
  useGetAllRepairsQuery,
  useGetRepairByIdQuery,
  useGetServiceProductsForRepairQuery,
  useGetOldRepairsForServiceQuery,
  useRepairWarrantyReturnToLibraryMutation,
  useGetRepairsForServiceQuery,
} = RepairApi;
