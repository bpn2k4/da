import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@slices/Auth'
import { systemReducer } from '@slices/System'

const reducer = {
  auth: authReducer,
  system: systemReducer,
}

const store = configureStore({
  reducer: reducer
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch