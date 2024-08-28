import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    loading: false,
    posts: {},
    post: {},
    error: null

  },
    reducers: {
    onCheckPost: (state) => {
        state.loading = true
    },
    onGetPosts: (state, {payload}) => {
        state.posts = payload
        state.loading = false
    },
    onGetPost: (state, {payload}) => {
        state.post = payload
        state.loading = false
    },

  },
});

// Action creators are generated for each case reducer function
export const {  onCheckPost, onGetPosts, onGetPost} = blogSlice.actions;