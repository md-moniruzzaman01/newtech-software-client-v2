import { baseApi } from "../../api/apiSlice";

const PartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPartsRequest: builder.mutation({
      query: ({ fullData, token,id }) => ({
        url: `/parts/create-request/${id}`,
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
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
    }),
  }),
});

export const {
useCreatePartsRequestMutation,
useDeletePartsRequestsMutation,
useGetpartsRequestsQuery
} = PartsApi;
