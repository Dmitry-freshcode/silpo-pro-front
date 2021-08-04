import { createSlice } from '@reduxjs/toolkit'

export const backetSlice = createSlice({
  name: 'backet',
  initialState: JSON.parse(localStorage.getItem('backet')) || [],
  reducers: {
    add: (state, action) => {
        const storage = JSON.parse(localStorage.getItem('backet'));
        let newStorage=[];
        if(storage && storage.length>0){ 
            newStorage = storage;                
            newStorage.push(action.payload);       
        } else{
            newStorage = [action.payload];
        }        
        
        localStorage.setItem('backet',JSON.stringify(newStorage)); 
        return newStorage;
    },
    remove: (state, action) => { 
        const storage = JSON.parse(localStorage.getItem('backet'));
        const newStorage = storage.filter(item=>item!==action.payload);
        localStorage.setItem('backet',JSON.stringify(newStorage));      
        return newStorage;
      },      
  }
})

export const { add , remove } = backetSlice.actions

export default backetSlice.reducer