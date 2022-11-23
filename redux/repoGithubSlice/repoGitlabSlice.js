/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  project: [],
  loading: false,
  error: '',
};

const BaseUrl = 'https://gitlab.com/api/v4/projects';

export const fetchProject = createAsyncThunk('repo/projectGithub', async () => {
  const response = await fetch(BaseUrl);
  console.log(response.data, 'response gitlab');
  return response.data;
});

const projectSlice = createSlice({
  name: 'Project',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.loading = false,
      state.project = action.payload,
      state.error = '';
    });
  },
});

export default projectSlice.reducer;
