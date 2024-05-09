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
    deleteEngineer: builder.mutation({
      query: ({ id, token }) => ({
        url: `/engineer/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
    }),
    getEngineers: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/engineers?limit=50&${query}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getEngineersList: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/engineers?${query}`,
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getEngineersData: builder.query({
      query: ({ token }) => {
        return {
          url: "/repair/data",
          headers: {
            authorization: token,
          },
        };
      },
    }),
    getEngineerDataForService: builder.query({
      query: ({ token }) => {
        return {
          url: "/repair/services/data",
          headers: {
            authorization: token,
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
      invalidatesTags: ["repair", "qa"],
    }),
    repairReturnToLibrary: builder.mutation({
      query: ({ fullData, token }) => ({
        url: `/repair/return-to-library`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["repair", "qa"],
    }),
    repairDelete: builder.mutation({
      query: ({ fullData, token }) => ({
        url: `/repair/return-to-library`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["repair", "qa"],
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
  useUpdateRepairStatusMutation,
  useRepairReturnToLibraryMutation,
  useGetEngineersDataQuery,
  useGetEngineerDataForServiceQuery,
  useDeleteEngineerMutation,
  useGetEngineersListQuery
} = EngineerApi;
