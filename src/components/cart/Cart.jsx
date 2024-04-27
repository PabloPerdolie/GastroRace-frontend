import React, { useContext, useEffect, useState } from "react";
import Nav from "../mainPage/Nav";
import { AuthContext } from "../context/AuthContext";
import CartItem from "./CartItem";
import instance from "../../axios/Axios";

function Cart(){

    const [data, setData] = useState([])
    const {token, setToken} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instance.get('/api/v1/cart', 
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    

    return(
        <div className="cart-main">
            
            {<Nav/>}
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-items">
                {data.map((item) => (
                  <li key={item.id} >
                    <CartItem item={item} data={data} setData={setData}/>
                  </li>
                ))}
            </ul>
            <button className="checkout-btn">ORDER</button>
        </div>
    )
}

export default Cart;