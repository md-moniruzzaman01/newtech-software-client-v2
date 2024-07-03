import { baseApi } from "../../api/apiSlice";

const CategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // category section
    createMainCategory: builder.mutation({
      query: ({ mainCategory, token }) => ({
        url: "/main/category",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: mainCategory,
      }),
      invalidatesTags: ["brand_category"],
    }),
    createCategory: builder.mutation({
      query: ({ addCategory, token }) => ({
        url: "/brand/category",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: addCategory,
      }),
      invalidatesTags: ["category"],
    }),
    editCategory: builder.mutation({
      query: ({ editCategory, token, id }) => ({
        url: `/brand/category/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: editCategory,
      }),
      invalidatesTags: ["category"],
    }),
    createCategoryForService: builder.mutation({
      query: ({ addCategory, token }) => ({
        url: "/category",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: addCategory,
      }),
    }),
    editCategoryForService: builder.mutation({
      query: ({ editCategory, token, id }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: editCategory,
      }),
      invalidatesTags: ["category", "brand_category"],
    }),
    getMainCategory: builder.query({
      query: ({ token }) => ({
        url: "/main/category",
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["brand_category"],
    }),

    getCategory: builder.query({
      query: ({ mainCategoryId, brandId, token }) => {
        return {
          url: `/brand/category?category=${mainCategoryId?.id}&brand=${brandId?.id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["category"],
    }),
    getCategoryAll: builder.query({
      query: ({ token }) => {
        return {
          url: `/brand/category`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["category"],
    }),
    getCategoryById: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/brand/category/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["category"],
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
      query: ({ mainCategoryId, token }) => ({
        url: `/category?category=${mainCategoryId?.id}`,
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["brand_category", "category"],
    }),
    getServiceCategoryAll: builder.query({
      query: ({ token }) => ({
        url: `/category`,
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["brand_category", "category"],
    }),
    getServiceCategoryById: builder.query({
      query: ({ token, id }) => {
        return {
          url: `/category/${id}`,
          headers: {
            authorization: token,
          },
        };
      },
      providesTags: ["brand_category", "category"],
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
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
  useGetServiceCategoryByIdQuery,
  useEditCategoryForServiceMutation,
} = CategoryApi;
