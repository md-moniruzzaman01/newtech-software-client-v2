import { baseApi } from "../../api/apiSlice";

const QAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // brand section
    createQA: builder.mutation({
      query: ({ fullData, token }) => ({
        url: "/qa",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["complaints", "qc"],
    }),
    updateStatusQA: builder.mutation({
      query: ({ fullData, token, id }) => ({
        url: `/qa/${id}`,
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
          url: `/qa/my-library/${params?.id}`,
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
    getQA: builder.query({
      query: (params) => {
        return {
          url: `/qa?${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
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
  useCreateQAMutation,
  useGetProductsQuery,
  useGetQcsQuery,
  useGetOldQcsQuery,
  useUpdateStatusQAMutation,
  useGetQAQuery,
} = QAApi;
