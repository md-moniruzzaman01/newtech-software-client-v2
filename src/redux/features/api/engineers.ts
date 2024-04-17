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
   updateRepairStatus: builder.mutation({
      query: ({ id, fullData, token }) => ({
        url: `/repair/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
    }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({a
    //     url: `/posts/${postId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useAddEngineerMutation,
  useGetEngineersQuery,
  useUpdateRepairStatusMutation
} = EngineerApi;
