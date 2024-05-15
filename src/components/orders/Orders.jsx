import React, { useEffect } from "react";
import { OrderItem } from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "../../app_state/store/reducers/orderSlice";
import { getOrders } from "../../app_state/store/actionCreators/orderActions";
import Nav from "../mainPage/Nav";

function OrdersPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, []);

    const orderSel = useSelector(selectOrders)

    return(
        <div>
            {<Nav/>}
            <div className="order-main">
            <h2 className="order-title">Orders</h2>
            <ul className="orders-items">
                <li className="order-item">
                    <div className="order-item-details">
                        <h3 className="table-header">Order date</h3>
                        <h3 className="table-header">Time remaining</h3>
                        <h3 className="table-header">Order status</h3>
                        <h3 className="table-header">Cost</h3>
                        <h3 className="table-header">Products</h3>
                    </div>
                </li>
                {orderSel.map((item) => (
                    <li key={item.id} >
                        <OrderItem item={item}/>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default OrdersPage;