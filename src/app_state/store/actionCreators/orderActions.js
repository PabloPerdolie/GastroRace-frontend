import { addOrderSuccess, getOrdersSuccess, orderError } from "../reducers/orderSlice"
import { clearCartSuccess } from "../reducers/cartSlice"
import OrderService from "../../axios/Orders"


export const getOrders = () => async (dispatch) => {
    try {
        const { data } = await OrderService.getOrders()
        dispatch(getOrdersSuccess(data))
        console.log(data)
    } catch(error) {
        dispatch(orderError(error))
    }
}

export const addOrder = (items) => async (dispatch) => {
    try {
        const { data } = await OrderService.addOrder(items)
        dispatch(addOrderSuccess(data))
        dispatch(clearCartSuccess())
        console.log(data);
    } catch(error) {
        dispatch(orderError(error))
    }
}
