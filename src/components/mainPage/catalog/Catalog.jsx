import React, { useState, useEffect, useContext } from "react";
import Item from "./Item";
import axios from "axios";
import Nav from "../Nav";
import { AuthContext } from "../../context/AuthContext";
import instance from "../../../axios/Axios";

function Catalog(){

    const [data, setData] = useState([]);

    const {token, setToken} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log({token})
                const response = await instance.get('/api/v1/products',
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  }
                }
                );
            
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
      }, []);

    return(
        <div className="catalog">
            <ul className="items-list">
                {data.map((item) => (
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog;