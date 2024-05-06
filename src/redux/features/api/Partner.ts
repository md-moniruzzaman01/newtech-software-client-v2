import { baseApi } from "../../api/apiSlice";

const ComplaintsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // partner section
    createPartner: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/user/create-partner",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getPartners: builder.query({
      query: ({ query, token }) => ({
        url: `/partners?${query}`,
        headers: {
          authorization: token,
        },
      }),
    }),
    // updatePost: builder.mutation({
    //   query: ({ postId, updatedPost }) => ({
    //     url: `/posts/${postId}`,
    //     method: "PUT",
    //     body: updatedPost,
    //   }),
    // }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useCreatePartnerMutation, useGetPartnersQuery } = ComplaintsApi;
