import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../store/slice/Post.slice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
