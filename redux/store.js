/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './repoGithubSlice/repoGithubSlice';
import projectSlice from './repoGithubSlice/repoGitlabSlice';

export const store = configureStore({
  reducer: {
    repo: repoReducer,
    repoGitlab: projectSlice,
  },
});
