import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { octokit } from "../pages/api/octokit"

const initialState = {
  loading: false,
  repositories: [],
  error: ''
}

export const fetchRepositories = createAsyncThunk('repo/fetchRepositories', () => {
  return octokit
    .request('GET /repositories')
    .then(res => res.data)
})

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRepositories.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.loading = false,
      state.repositories = action.payload,
      state.error = ''
    })

    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.loading = false,
      state.repositories = [],
      state.error = action.error.message
    })
  }
})

export default repositoriesSlice.reducer