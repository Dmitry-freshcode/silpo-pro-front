import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    field: 'name',
    sort: 1,    
    limit:9999,
    skip:0,

  },
  reducers: {
    selectSort: (state, action) => {      
      if(state.field===action.payload){
        state.sort = state.sort*-1;
      } else {
        return {
          field: action.payload,
          sort: 1,    
          limit:9999,
          skip:0,      
        }
      }
    },
   
  }
})

// Action creators are generated for eache case reducer function
export const { selectSort } = sortSlice.actions

export default sortSlice.reducer