import { createSlice } from "@reduxjs/toolkit";
import { IPaginationProps, IPost } from "../../@types/post";

export interface IInitialStateProps {
  posts: IPost[];
  pagination: IPaginationProps;
}

const initialState: IInitialStateProps = {
  posts: [],
  pagination: {
    prev: "",
    current: "",
    next: "",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.pagination = action.payload.pagination;
    },
  },
});

export const { addPosts } = postSlice.actions;
export default postSlice.reducer;
