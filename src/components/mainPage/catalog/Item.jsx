import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ImageComponent from "./ImageComponent";
import instance from "../../../axios/Axios";

function Item({item}){
    const { token, setToken } = useContext(AuthContext);

    const handleClick = async(e) => {
        e.preventDefault()
        try{

            const response = await instance.post(`/api/v1/cart/add?id=${item.id}`, "", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data)
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