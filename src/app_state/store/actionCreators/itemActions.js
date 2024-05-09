import ItemsService from "../../axios/Items"
import { createItemSuccess, deleteItemSuccess, fetchItemsError, fetchItemsSuccess } from "../reducers/itemSlice"

export const getItems = () => async (dispatch) => {
    try {
        const { data } = await ItemsService.getItems()
        dispatch(fetchItemsSuccess(data))
    } catch(error) {
        dispatch(fetchItemsError(error.message))
    }
}

export const addItem = (item) => async (dispatch) => {
    try {
        const { data } = await ItemsService.addItem(item)
        dispatch(createItemSuccess(data))
    } catch(error) {
        dispatch(fetchItemsError(error.message))
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        const { data } = await ItemsService.deleteItem(id)
        console.log(data)
        dispatch(deleteItemSuccess(id))
    } catch(error) {
        dispatch(fetchItemsError(error.message))
    }
}