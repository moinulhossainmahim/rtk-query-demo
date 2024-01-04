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

    createPost: builder.mutation<Post, Post[]>({
      query: (title) => ({
        url: '/',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Posts'],
    }),

    updatePost: builder.mutation<Post, Post>({
      query: ({ id, title }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    deletePost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: `/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  })
})

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postsApi;
