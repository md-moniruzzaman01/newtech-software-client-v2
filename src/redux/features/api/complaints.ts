import { baseApi } from "../../api/apiSlice";

const ComplaintsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    complaintAdd: builder.mutation({
      query: (newPost) => ({
        url: "/complaints/create",
        method: "POST",
        body: newPost,
      }),
    }),
    getComplaints: builder.query({
      query: (params) => {
        // console.log(`/complaints?${params?.query}`);
        // console.log(params);
        const token = params?.token;
        console.log(token);
        return {
          url: `/complaints?${params?.query}`,
          headers: {
            Authorization: token,
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

export const { useComplaintAddMutation, useGetComplaintsQuery } = ComplaintsApi;
