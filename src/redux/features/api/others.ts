import { baseApi } from "../../api/apiSlice";

const OthersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getChartData: builder.query({
        query: (params) => {
          return {
            url: `/complaints/chart`,
            headers: {
              authorization: params?.token,
            },
          };
        },
      }),
    getCardData: builder.query({
        query: (params) => {
          return {
            url: `/complaints/card`,
            headers: {
              authorization: params?.token,
            },
          };
        },
      }),

  }),
});

export const {useGetChartDataQuery,useGetCardDataQuery  } = OthersApi;
