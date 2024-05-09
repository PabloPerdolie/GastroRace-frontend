import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../app_state/store/actionCreators/cartActions";


function CartItem({item}){

    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch(deleteCart(item.id))
    }

    return(
        <li className="cart-item">
            <div className="item-details"> 
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
            </div>
            <button className="item-button" onClick={(e)=>handleClick(e)}>DELETE</button>
        </li>
    )
}
export default CartItem;