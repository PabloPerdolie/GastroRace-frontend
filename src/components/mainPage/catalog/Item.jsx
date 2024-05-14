import React from "react";
import ImageComponent from "./ImageComponent";
import Cookies from "universal-cookie";
import instance from "../../../app_state/axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../app_state/store/actionCreators/itemActions";
import { addCart } from "../../../app_state/store/actionCreators/cartActions";
import { selectUserData } from "../../../app_state/store/reducers/authSlice";

function Item({item}){

    const dispatch = useDispatch()

    const handleClickAddCart = async(e) => {
        e.preventDefault()
        dispatch(addCart(item.id))
    }

    const handleClickDeleteItem = async(e) => {
        e.preventDefault()
        dispatch(deleteItem(item.id))
    }

    const find = () => {
        try{
            const imagebytes = item.image_data
            return imagebytes
        } catch(error){
            console.log(error)
        }
    }
    
    const auth = useSelector(selectUserData)
    return(
        <li className="item">
            <h1 className="item-name">{item.name}</h1>
            <p className="item-type">{item.type}</p>
            <p className="item-price">{item.price} руб.</p>
            <ImageComponent imagebytes={find()}/>
            {auth.admin ?
            <button className="item-button-delete-item" onClick={(e)=>handleClickDeleteItem(e)}>DELETE</button>
            : <button className="item-button-cart-add" onClick={(e)=>handleClickAddCart(e)}>ADD TO CART</button>
            }
        </li>
    )
}

export default Item;