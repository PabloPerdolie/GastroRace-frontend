import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartList: [],
        error: null
    },
    reducers: {
        getCartSuccess: (state, action) => {
            state.cartList = action.payload
        },
        addCartSuccess: (state, action) => {
            state.cartList = [...state.cartList, action.payload]
            console.log(state.cartList);
        },
        deleteCartSuccess: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload)
        },
        clearCartSuccess: (state) => {
            state.cartList = []
        },
        cartError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {
    getCartSuccess,
    addCartSuccess,
    deleteCartSuccess,
    clearCartSuccess,
    cartError
} = cartSlice.actions

export const selectCart = (state) => state.cart.cartList

export default cartSlice.reducer
