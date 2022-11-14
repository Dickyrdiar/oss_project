import { configureStore } from "@reduxjs/toolkit";
import repoReducer from '../redux/repoSlice'

export const store = configureStore({
  reducer: {
    repo: repoReducer
  }
})