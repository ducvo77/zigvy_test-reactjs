import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostList: (state, action) => {
      if (state.some((post) => post === action.payload[0])) {
        return
      } else {
        return [...state, ...action.payload]
      }
    },
  },
})

export const { setPostList } = postSlice.actions

export default postSlice.reducer
