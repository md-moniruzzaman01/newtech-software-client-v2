import { baseApi } from "../../api/apiSlice";

const RepairApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/product?warranty=true&repair_status=QC%20Ok`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

  }),
});

export const { useGetProductsQuery} = RepairApi;
