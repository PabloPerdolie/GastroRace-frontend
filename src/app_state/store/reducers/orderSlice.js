import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        orderList: [],
        error: null
    },
    reducers: {
        getOrdersSuccess: (state, action) => {
            state.orderList = action.payload
        },
        addOrderSuccess: (state, action) => {
            state.orderList = [action.payload, ...state.orderList]
        },
        orderError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {
    getOrdersSuccess,
    addOrderSuccess,
    orderError
} = orderSlice.actions

export const selectOrders = (state) => state.orders.orderList

export default orderSlice.reducer
