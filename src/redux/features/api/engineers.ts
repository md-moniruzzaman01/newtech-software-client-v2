/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/apiSlice";

const EngineerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addEngineer: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/user/create-engineer",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    getEngineers: builder.query({
      query: (params) => {
        // console.log(`/complaints?${params?.query}`);
        // console.log(params);
        return {
          url: `/engineers`,
          headers: {
            authorization: params?.token,
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

export const { useAddEngineerMutation, useGetEngineersQuery } = EngineerApi;
