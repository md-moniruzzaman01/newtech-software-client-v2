import { baseApi } from "../../api/apiSlice";

const QCApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createQC: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qc",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "qc"],
    }),
    updateStatusQC: builder.mutation({
      query: ({ fullData, token, id }) => ({
        url: `/qc/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "qc"],
    }),

    getOldQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),

    getQcs: builder.query({
      query: (params) => {
        return {
          url: `/qc/my-library/${params?.id}?status=QC&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),
    getQC: builder.query({
      query: () => "/brand",
    }),
    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/product?repair_status=Received&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints"],
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

export const {
  useCreateQCMutation,
  useGetProductsQuery,
  useGetQcsQuery,
  useGetOldQcsQuery,
  useUpdateStatusQCMutation,
} = QCApi;
