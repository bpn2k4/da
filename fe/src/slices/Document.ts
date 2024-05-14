import Api from '@apis'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Document } from '@types'

const thunkGetDocuments = createAsyncThunk('thunkGetDocuments', Api.DocumentApi.getDocuments)

type DocumentState = {
  documents: Document[],
  page: number,
  limit: number,
  total: number,
  isFetching: boolean
}

const initialState: DocumentState = {
  documents: [],
  page: 0,
  limit: 10,
  total: 10,
  isFetching: false
}

const DocumentSlice = createSlice({
  name: 'DocumentSlice',
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
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetDocuments.fulfilled, (state, { payload }) => {
      if (payload.status == Api.STATUS.SUCCESS) {
        state.documents = payload.documents
        state.total = payload.total
      }
    })
  }
})

export const documentReducer = DocumentSlice.reducer
export const { setLimit, setPage, setTotal } = DocumentSlice.actions
export { thunkGetDocuments }