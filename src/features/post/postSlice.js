import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostList: (state, action) => {
      return action.payload
    },
  },
})

export const { setPostList } = postSlice.actions

export default postSlice.reducer
