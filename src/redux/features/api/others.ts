import { baseApi } from "../../api/apiSlice";

const OthersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: (params) => {
        return {
          url: "/complaints/chart",
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getCardData: builder.query({
      query: (params) => {
        return {
          url: "/complaints/card",
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getChartDataForService: builder.query({
      query: (params) => {
        return {
          url: "/complaints/chart/services",
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getCardDataForService: builder.query({
      query: (params) => {
        return {
          url: "/complaints/card/services",
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),
    getNotification: builder.query({
      query: ({ id, token }) => {
        return {
          url: `/notification/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: [
        "complaints",
        "brand_category",
        "category",
        "repair",
        "qc",
        "qa",
        "bill",
        "notifications",
      ],
    }),
    updateNotification: builder.mutation({
      query: ({ id, token }) => ({
        url: `/notification/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["notifications"],
    }),
  }),
});

export const {
  useGetChartDataQuery,
  useGetCardDataQuery,
  useGetCardDataForServiceQuery,
  useGetChartDataForServiceQuery,
  useGetNotificationQuery,
  useUpdateNotificationMutation,
} = OthersApi;
