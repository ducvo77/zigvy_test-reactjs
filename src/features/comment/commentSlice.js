import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentList: (state, action) => {
      return action.payload
    },
  },
})

export const { setCommentList } = commentSlice.actions

export default commentSlice.reducer
