import { baseApi } from "../../api/apiSlice";

const PartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPartsRequest: builder.mutation({
      query: ({ fullData, token, id }) => ({
        url: `/parts/create-request/${id}`,
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["repair"],
    }),
    getpartsRequests: builder.query({
      query: (params) => {
        return {
          url: `/parts?${params.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["repair"],
    }),
    // createPartsRequest: builder.mutation({
    //   query: ({ id, fullData, token }) => ({
    //     url: `/repair/${id}`,
    //     method: "PATCH",
    //     headers: {
    //       authorization: token,
    //     },
    //     body: fullData,
    //   }),
    // }),
    deletePartsRequests: builder.mutation({
      query: (postId) => ({
        url: `/parts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["repair"],
    }),
  }),
});

export const {
  useCreatePartsRequestMutation,
  useDeletePartsRequestsMutation,
  useGetpartsRequestsQuery,
} = PartsApi;
