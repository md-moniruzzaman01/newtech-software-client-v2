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
          url: `/qc/my-library?${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),

    getQcs: builder.query({
      query: ({ token, query }) => {
        return {
          url: `/qc/my-library?status=QC&${query}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["qc"],
    }),

    getQcById: builder.query({
      query: (params) => {
        return {
          url: `/qc/${params?.id}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["qc"],
    }),

    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/product?warranty=true&repair_status=Received&repair_status=Return%20to%20Qc%20library&${params?.query}`,
          headers: {
            authorization: params?.token,
          },
        };
      },
      providesTags: ["complaints", "repair", "qc"],
    }),
    qcReturnToLibrary: builder.mutation({
      query: ({ fullData, token }) => ({
        url: `/qc/return-to-library`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: fullData,
      }),
      invalidatesTags: ["repair", "qc"],
    }),
  }),
});

export const {
  useCreateQCMutation,
  useGetProductsQuery,
  useGetQcsQuery,
  useGetOldQcsQuery,
  useUpdateStatusQCMutation,
  useGetQcByIdQuery,
  useQcReturnToLibraryMutation,
} = QCApi;
