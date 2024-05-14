import { baseApi } from "../../api/apiSlice";

const CategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // category section
    createMainCategory: builder.mutation({
      query: (mainCategory) => ({
        url: "/main/category",
        method: "POST",
        body: mainCategory,
      }),
      invalidatesTags: ["brand_category"],
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: "/brand/category",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
    createCategoryForService: builder.mutation({
      query: (category) => ({
        url: "/category",
        method: "POST",
        body: category,
      }),
    }),
    getMainCategory: builder.query({
      query: () => "/main/category",
      providesTags: ["brand_category"],
    }),

    getCategory: builder.query({
      query: ({ mainCategoryId, brandId }) => {
        return {
          url: `/brand/category?category=${mainCategoryId?.id}&brand=${brandId?.id}`,
        };
      },
    }),
    getCategoryAll: builder.query({
      query: () => {
        return {
          url: `/brand/category`,
        };
      },
    }),

    deleteCategoryForWarranty: builder.mutation({
      query: ({ id, token }) => ({
        url: `/brand/category/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["category"],
    }),

    getServiceCategory: builder.query({
      query: ({ mainCategoryId }) => `/category?category=${mainCategoryId?.id}`,
      providesTags: ["brand_category"],
    }),
    getServiceCategoryAll: builder.query({
      query: () => `/category`,
      providesTags: ["brand_category"],
    }),

    deleteCategoryForService: builder.mutation({
      query: ({ id, token }) => ({
        url: `/category/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["category"],
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
  useCreateMainCategoryMutation,
  useGetMainCategoryQuery,
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useGetServiceCategoryQuery,
  useCreateCategoryForServiceMutation,
  useGetServiceCategoryAllQuery,
  useGetCategoryAllQuery,
  useDeleteCategoryForServiceMutation,
  useDeleteCategoryForWarrantyMutation,
} = CategoryApi;
