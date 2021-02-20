import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    add: (state, action) => { 
      return action.payload;
    },   
  }
})

export const { add } = productsSlice.actions

export default productsSlice.reducer