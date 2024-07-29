import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItemCount:0
  },
  reducers: {
    addItems : (state:any,action:any) => {
        const itemCart = state.items.find((item:any) =>item.id=== action.payload.id);
        console.log("itemcart",itemCart)
        itemCart? itemCart.quantity++:state.items.push({...action.payload,quantity:1});
        state.totalItemCount++;
        
    },
    removeItems : (state:any, action:any)=>{
      const itemCard = state.items.find((item:any) => item.id=== action.payload.id);
      console.log("item",itemCard);
      if(!itemCard) return;
      if(itemCard.quantity === 1){
        state.items = state.items.filter((item:any) => item.id !== action.payload.id);
      }
      else{
        itemCard.quantity--;
      }
      state.totalItemCount--;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItemCount = 0;
    }
  },
});

export const { addItems,removeItems } = cartSlice.actions;
export default cartSlice.reducer;
