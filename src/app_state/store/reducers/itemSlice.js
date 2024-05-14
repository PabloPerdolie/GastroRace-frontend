import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'itemsSlice',
    initialState: {
        itemsList: [],
        error: null
    },
    reducers: {
        fetchItemsSuccess: (state, action) => {
            state.itemsList = action.payload
        },
        createItemSuccess: (state, action) => {
            state.itemsList = [...state.itemsList, action.payload]
        },
        deleteItemSuccess: (state, action) => {
            state.itemsList = state.itemsList.filter(item => item.id !== action.payload)
        },
        fetchItemsError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {
    fetchItemsError,
    fetchItemsSuccess, 
    createItemSuccess,
    deleteItemSuccess
} = itemsSlice.actions

export const selectItems = (state) => state.items.itemsList

export default itemsSlice.reducer