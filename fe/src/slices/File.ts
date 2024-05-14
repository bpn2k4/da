import Api from '@apis'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { File } from '@types'

const thunkGetFiles = createAsyncThunk('thunkGetFiles', Api.FileApi.getFiles)

type FileState = {
  files: File[],
  page: number,
  limit: number,
  total: number,
  isFetching: boolean
}

const initialState: FileState = {
  files: [],
  page: 0,
  limit: 10,
  total: 200,
  isFetching: false
}

const FileSlice = createSlice({
  name: 'FileSlice',
  initialState: initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setLimit: (state, { payload }) => {
      state.limit = payload
    },
    setTotal: (state, { payload }) => {
      state.total = payload
    },
    setFiles: (state, { payload }) => {
      state.files = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetFiles.fulfilled, (state, { payload }) => {
      if (payload.status == Api.STATUS.SUCCESS) {
        state.files = payload.files
        state.total = payload.total
      }
    })
  }
})

export const fileReducer = FileSlice.reducer
export const { setLimit, setPage, setTotal, setFiles } = FileSlice.actions
export { thunkGetFiles }