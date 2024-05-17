import Api from '@apis'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Conversation } from '@types'

const thunkGetConversations = createAsyncThunk('thunkGetConversations', Api.ConversationApi.getConversations)

const initialState: ChatState = {
  page: 0,
  limit: 50,
  total: 1,
  conversations: []
}

const ChatSlice = createSlice({
  name: 'ChatSlice',
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
    setConversations: (state, { payload }) => {
      state.conversations = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(thunkGetConversations.fulfilled, (state, { payload }) => {
      if (payload.status == Api.STATUS.SUCCESS) {
        state.conversations = payload.conversations
      }
    })
  }
})

export const chatReducer = ChatSlice.reducer
export const { setConversations, setLimit, setPage, setTotal } = ChatSlice.actions
export { thunkGetConversations }


type ChatState = {
  page: number,
  limit: number,
  total: Number,
  conversations: Conversation[]
}
