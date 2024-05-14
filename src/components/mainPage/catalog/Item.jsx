import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../app_state/store/actionCreators/itemActions";
import { addCart } from "../../../app_state/store/actionCreators/cartActions";
import { selectUserData } from "../../../app_state/store/reducers/authSlice";

function Item({ item }) {
    const dispatch = useDispatch();
    const [imageBytes, setImageBytes] = useState(null); 

    const handleClickAddCart = (e) => {
        e.preventDefault();
        const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price
        };
        dispatch(addCart(itemToCart));
    };

    const handleClickDeleteItem = (e) => {
        e.preventDefault();
        dispatch(deleteItem(item.id));
    };

    const auth = useSelector(selectUserData);

    const loadImageBytes = () => {
        try {
            const imagebytes = item.image_data;
            setImageBytes(imagebytes);
        } catch (error) {
            console.log(error);
        }
    };

    useState(() => {
        loadImageBytes();
    }, []);

    return (
        <li className="item">
            <h1 className="item-name">{item.name}</h1>
            <p className="item-type">{item.type}</p>
            <p className="item-price">{item.price} руб.</p>
            {imageBytes && <ImageComponent imagebytes={imageBytes} />}
            {auth.admin ? (
                <button className="item-button delete-item" onClick={handleClickDeleteItem}>
                    DELETE
                </button>
            ) : (
                <button className="item-button cart-add" onClick={handleClickAddCart}>
                    ADD TO CART
                </button>
            )}
        </li>
    );
}

export default Item;
