import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../features/posts";

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/',
      providesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    createPost: builder.mutation({
      query: (title) => ({
        url: '/',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Posts'],
    }),

    updatePost: builder.mutation({
      query: ({ id, title }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: ['Posts'],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  })
})

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postsApi;
