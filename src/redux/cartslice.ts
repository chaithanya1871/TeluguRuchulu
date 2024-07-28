// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState:{
//         items:[]
//     },

// })

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItems : (state:any,action:any) => {
        console.log("state", state)
        console.log(action.payload);
        // const itemCart = state.items.find((item:any) =>item.id=== action.payload.id)
        state.items.push(action.payload) 
    }
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
