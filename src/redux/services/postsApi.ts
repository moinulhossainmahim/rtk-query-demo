import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../features/posts";

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: [{ type: 'Posts', id: 'LIST' }],
    })
  })
})

export const { useGetPostsQuery } = postsApi;
