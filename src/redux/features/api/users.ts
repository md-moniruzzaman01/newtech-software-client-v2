/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const UserInfoSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ userId, token }) => {
        return {
          url: `/engineers/${userId}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getAdmin: builder.query({
      query: (params) => {
        return {
          url: `/admin/${params?.userId}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
    }),

    // getBillById: builder.query({
    //   query: (params) => {
    //     return {
    //       url: `/bill/${params?.id}`,
    //       headers: {
    //         authorization: params?.token,
    //       },
    //     };
    //   },
    // }),

    // updatePost: builder.mutation({
    //   query: ({ postId, updatedPost }) => ({
    //     url: `/posts/${postId}`,
    //     method: "PUT",
    //     body: updatedPost,
    //   }),
    // }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({a
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useGetUserQuery, useGetAdminQuery } = UserInfoSlice;
