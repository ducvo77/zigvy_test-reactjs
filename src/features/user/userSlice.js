import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList: (state, action) => {
      return action.payload
    },
  },
})

export const { setUserList } = userSlice.actions

export default userSlice.reducer
