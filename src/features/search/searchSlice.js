import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      return action.payload
    },
  },
})

export const { changeValue } = searchSlice.actions

export default searchSlice.reducer
