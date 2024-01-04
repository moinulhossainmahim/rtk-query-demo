  import { PayloadAction, createSlice } from "@reduxjs/toolkit";

  export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
  }

  export interface PostStore {
    posts: Post[];
    isLoading: boolean;
    isSuccess: boolean;
  }

  const initialState: PostStore = {
    posts: [],
    isLoading: false,
    isSuccess: false,
  }

  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      getPosts: (state, action: PayloadAction<PostStore>) => {
        state.isLoading = action.payload.isLoading;
        state.isSuccess = action.payload.isSuccess;
        state.posts = action.payload.posts;
      }
    },
  })

  export const { getPosts } = postsSlice.actions;
  export default postsSlice.reducer;
