import { createSlice } from '@reduxjs/toolkit'

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    if (theme == 'light' || theme == 'dark') return theme
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'dark'
}

const initTheme = () => {
  const theme = getTheme()
  if (theme == 'dark') { document.documentElement.classList.add('dark') }
  else { document.documentElement.classList.remove('dark') }
  localStorage.setItem('theme', theme)
  return theme
}

type SystemState = {
  theme: 'light' | 'dark',
  windowWidth: Number | null,
  windowHeight: Number | null,
}

const initialState: SystemState = {
  theme: initTheme(),
  windowHeight: null,
  windowWidth: null
}

const systemSlice = createSlice({
  name: 'SystemSlice',
  initialState: initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme == payload
      if (payload == 'light') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    }
  }
})

export const systemReducer = systemSlice.reducer
export const { setTheme } = systemSlice.actions