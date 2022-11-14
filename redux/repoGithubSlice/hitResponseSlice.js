import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  response: []
}

export const fetchReponse = createAsyncThunk('repositories/response', () => {
  return fetch
})
