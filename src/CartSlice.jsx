import {createSlice} from '@reduxjs/toolkit';
// Prices are stored in cents so cart arithmetic remains exact.
const cartSlice=createSlice({name:'cart',initialState:{items:[]},reducers:{
 addItem(state,{payload}) { if(!state.items.some(item=>item.id===payload.id)) state.items.push({...payload,quantity:1}); },
 increaseQuantity(state,{payload}) { const item=state.items.find(item=>item.id===payload); if(item) item.quantity+=1; },
 decreaseQuantity(state,{payload}) { const item=state.items.find(item=>item.id===payload); if(item && item.quantity>1) item.quantity-=1; else state.items=state.items.filter(item=>item.id!==payload); },
 removeItem(state,{payload}) { state.items=state.items.filter(item=>item.id!==payload); }
}});
export const {addItem,increaseQuantity,decreaseQuantity,removeItem}=cartSlice.actions;
export const selectItems=state=>state.cart.items;
export const selectQuantity=state=>state.cart.items.reduce((sum,item)=>sum+item.quantity,0);
export const selectTotal=state=>state.cart.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
export default cartSlice.reducer;
