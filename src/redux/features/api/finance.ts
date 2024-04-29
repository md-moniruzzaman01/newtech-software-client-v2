import { baseApi } from "../../api/apiSlice";

const FinanceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getComplaintsData: builder.query({
        query: (params) => {
          return {
            url: "/complaints/data",
            headers: {
              authorization: params?.token,
            },
          };
        },
      }),

    }),
  });
  
  export const {
   useGetComplaintsDataQuery
  } = FinanceApi;