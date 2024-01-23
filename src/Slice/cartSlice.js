import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state,action)=>{
            const newFoodItem = action.payload;
            console.log(newFoodItem);
            const isAlreadyInCart = state.items.some(item => item.card.info.id === newFoodItem.card.info.id);
             if (!isAlreadyInCart) {
                    state.items.push(newFoodItem);
            }  
        },
        removeItem : (state,action)=>{
            console.log(action.payload)
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
        },
        clearCartItems : (state,action)=>{
            state.items.length = 0;
        },
    }
})

export const {addItem,removeItem,clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;