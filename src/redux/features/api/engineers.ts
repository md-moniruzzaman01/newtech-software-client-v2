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
      invalidatesTags: ["engineer"],
    }),
    deleteEngineer: builder.mutation({
      query: ({ id, token }) => ({
        url: `/engineers/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["engineer"],
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
      providesTags: ["engineer"],
    }),
    getEngineerById: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/engineers/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["engineer"],
    }),
    getEngineerDetailsById: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/engineers/details/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["engineer"],
    }),
    editEngineer: builder.mutation({
      query: ({ fullData, token, id }) => {
        return {
          url: `/engineers/${id}`,
          method: "PATCH",
          headers: {
            authorization: token,
          },
          body: fullData,
        };
      },
      invalidatesTags: ["engineer"],
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
      providesTags: ["engineer"],
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
      providesTags: ["engineer"],
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
      providesTags: ["engineer"],
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
  useGetEngineerByIdQuery,
  useGetEngineersQuery,
  useUpdateRepairStatusMutation,
  useRepairReturnToLibraryMutation,
  useGetEngineersDataQuery,
  useGetEngineerDataForServiceQuery,
  useDeleteEngineerMutation,
  useGetEngineersListQuery,
  useEditEngineerMutation,
  useGetEngineerDetailsByIdQuery,
} = EngineerApi;
