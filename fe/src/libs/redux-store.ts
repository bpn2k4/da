import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@slices/Auth'
import { documentReducer } from '@slices/Document'
import { fileReducer } from '@slices/File'
import { systemReducer } from '@slices/System'

const reducer = {
  auth: authReducer,
  document: documentReducer,
  file: fileReducer,
  system: systemReducer,
}

const store = configureStore({
  reducer: reducer,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch