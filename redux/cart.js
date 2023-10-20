import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        showModal:false
    },
    reducers:{
      addTCart:(state,action)=>{
state.cart.push(action.payload)
    } ,
     toggleModal:(state,action)=>{
        state.showModal =  action.payload
     }
    }
    
})

export default cartSlice.reducer
export const addToCart = cartSlice.actions.addTCart
export const toggleModal = cartSlice.actions.toggleModal