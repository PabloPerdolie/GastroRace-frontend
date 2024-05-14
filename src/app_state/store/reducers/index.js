import { combineReducers } from "redux";
import AuthReducer from "./authSlice";
import CartReducer from "./cartSlice";
import ItemsReducer from "./itemSlice";
import OrdersReducer from "./orderSlice";


export const rootReducer = combineReducers({
    auth: AuthReducer, 
    cart: CartReducer,
    items: ItemsReducer,
    orders: OrdersReducer,
})