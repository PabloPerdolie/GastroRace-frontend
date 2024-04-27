import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/Axios";

function AddItem(){

    const [item, setItem] = useState({
        name: "",
        desc: "",
        type: "",
        price: "",
    }
    )

    const imageRef = useRef()

    const { token, setToken } = useContext(AuthContext);

    const [selectedImage, setSelectedImage] = useState();

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const navigate = useNavigate()

    const handleImage = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('name', item.name);
            formData.append('desc', item.desc);
            formData.append('price', item.price);
            formData.append('type', item.type);
            console.log(formData.getAll('file'))
            console.log(token.token)
            //const response = await axios.post(`https://gastrorace-backend.onrender.com/api/v1/products`,
            const response = await instance.post(`/api/v1/products`,
            formData
            , {
              headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
              }
            }
            );
            navigate("/main-page")
          
            console.log('Успешная загрузка:', response.data);
        } catch (error) {

            console.error('Ошибка загрузки:', error);
        }
      };

    return(
        <div className="add-item-main">
            <h2>Add new item</h2>
            <form>
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