import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../../app_state/store/actionCreators/itemActions";

function AddItem(){

    const [item, setItem] = useState({
        name: "",
        desc: "",
        type: "",
        price: ""
    })

    const dispatch = useDispatch()

    const imageRef = useRef()

    const [selectedImage, setSelectedImage] = useState();

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('name', item.name);
        formData.append('desc', item.desc);
        formData.append('price', item.price);
        formData.append('type', item.type);
        dispatch(addItem(formData))
        if (imageRef.current) {
            imageRef.current.value = null
        }
        setItem({
            name: "",
            desc: "",
            type: "",
            price: ""
        })
    };

    return(
        <div className="add-item-main">
            <h2>Add new item</h2>
            <form on>
                <input type="text" id="name" value={item.name} onChange={e => setItem({...item, name: e.target.value})} placeholder="name"/>
                <input type="text" id="decription" value={item.desc} onChange={e => setItem({...item, desc: e.target.value})} placeholder="description"/>
                <input type="text" id="category" value={item.type} onChange={e => setItem({...item, type: e.target.value})} placeholder="category"/>
                <input type="text" id="price" value={item.price} onChange={e => setItem({...item, price: e.target.value})} placeholder="price"/>
                <input ref={imageRef} type="file" accept="image/*" onChange={(e)=>handleImageChange(e)} />
                <button onClick={handleImage}>Add item</button>
            </form>
        </div>

    )
}

export default AddItem;