import { baseApi } from "../../api/apiSlice";

const RepairApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/product`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

  }),
});

export const { useGetProductsQuery} = RepairApi;
