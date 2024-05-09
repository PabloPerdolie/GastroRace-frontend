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
            state.cartList = [action.payload, ...state.cartList]
        },
        deleteCartSuccess: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload)
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
    cartError
} = cartSlice.actions

export const selectCart = (state) => state.cart.cartList

export default cartSlice.reducer
