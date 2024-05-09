import CartService from "../../axios/Cart"
import { addCartSuccess, cartError, deleteCartSuccess, getCartSuccess } from "../reducers/cartSlice"


export const getCart = () => async (dispatch) => {
    try {
        const { data } = await CartService.getCart()
        dispatch(getCartSuccess(data))
    } catch(error) {
        dispatch(cartError(error.message))
    }
}

export const addCart = (id) => async (dispatch) => {
    try {
        const { data } = await CartService.cartAdd(id)
        console.log(data)
        dispatch(addCartSuccess(id))
    } catch(error) {
        dispatch(cartError(error.message))
    }
}

export const deleteCart = (id) => async (dispatch) => {
    try {
        const { data } = await CartService.cartDelete(id)
        console.log(data)
        dispatch(deleteCartSuccess(id))
    } catch(error) {
        dispatch(cartError(error.message))
    }
}