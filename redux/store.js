import { configureStore } from "@reduxjs/toolkit";
import repoReducer from './repoGithubSlice/repoGithubSlice'

export const store = configureStore({
  reducer: {
    repo: repoReducer
  }
})