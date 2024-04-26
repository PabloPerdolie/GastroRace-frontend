import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import ImageComponent from "./ImageComponent";

function Item({item}){
    const { token, setToken } = useContext(AuthContext);


    const handleClick = async(e) => {
        e.preventDefault()
        try{

            const response = await axios.post(`https://gastrorace-backend.onrender.com/cart/add/${item.id}`,"", {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
                })
            console.log("Succeed")
        }catch(error){
            console.log(error)
        }

    }

    const find = () => {
        try{
            const imagebytes = item.image_data
            return imagebytes
        } catch(error){
            console.log(error)
        }
    }
    

    return(
        <li className="item">
            <h1 className="item-name">{item.name}</h1>
            <p className="item-type">{item.type}</p>
            <p className="item-price">{item.price} руб.</p>
            <ImageComponent imagebytes={find()}/>
            <button className="item-button" onClick={(e)=>handleClick(e)}>ADD TO CART</button>
        </li>
    )
}

export default Item;