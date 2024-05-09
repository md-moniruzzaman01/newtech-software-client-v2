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

    updatePassword: builder.mutation({
      query: ({ id, fullData, token }) => {
        return {
          url: `/auth/admin/change-password/${id}`,
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),
    normalUserUpdatePassword: builder.mutation({
      query: ({ fullData, token }) => {
        return {
          url: "/auth/change-password",
          headers: {
            authorization: token,
          },
          method: "POST",
          body: fullData,
        };
      },
    }),

    getWalkingCustomer: builder.query({
      query: ({ token, query }) => {
        console.log(`nw-customer?${query}`);
        return {
          url: `nw-customer?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),

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

export const {
  useGetUserQuery,
  useGetAdminQuery,
  useUpdatePasswordMutation,
  useNormalUserUpdatePasswordMutation,
  useGetWalkingCustomerQuery,
} = UserInfoSlice;
