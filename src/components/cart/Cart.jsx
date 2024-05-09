import React, { useEffect } from "react";
import Nav from "../mainPage/Nav";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../app_state/store/reducers/cartSlice";
import { getCart } from "../../app_state/store/actionCreators/cartActions";

function Cart(){

    const dispatch = useDispatch()

    const cartSel = useSelector(selectCart)

    useEffect(() => {
        dispatch(getCart())
    }, []);

    return(
        <div className="cart-main">
            {<Nav/>}
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-items">
                {cartSel.map((item) => (
                    <li key={item.id} >
                        <CartItem item={item}/>
                    </li>
                ))}
            </ul>
            <button className="checkout-btn" onClick={(event)=>{event.preventDefault()}}>ORDER</button>
        </div>
    )
}

export default Cart;