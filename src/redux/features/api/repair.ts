import { baseApi } from "../../api/apiSlice";

const RepairApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    assignEngineer: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qc",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints","repair"],
    }),
    getOldQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library?status=QC%20Ok&${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ['qc'],
    }),
    getQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ['qc'],
    }),

    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/product?repair_status=Received&warranty=true&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ['complaints'],
    }),


  }),
});

export const { useGetProductsQuery} = RepairApi;
