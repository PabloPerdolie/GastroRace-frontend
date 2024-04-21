import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";



function Entry(){
    const [user, setUser] = useState({
        email: "", 
        password: ""
    })

    const { token, setToken } = useContext(AuthContext);

    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        try {
        //   const response = await axios.post("https://gastrorace-backend.onrender.com/login", user)
        //   setToken(response.data)
          console.log({token})
            
          //console.log('Успешная авторизация:', response.data)
          navigate("/main-page")
        } catch (error) {
          console.error('Ошибка авторизации:', error)
        }
    };

    return(
        <div className="entry-main">
            <h2>Entry</h2>
            <form>
                <input type="text" id="login-entry" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required placeholder="login" />
                <input type="password" id="password-entry" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required placeholder="password"/>
                <Link to="/registration">Wanna create an account?</Link>
                <button id="entry"
                onClick={(event)=>{
                    event.preventDefault()
                    handleSubmit()
                }}>Entry</button>            
            </form>
            
        </div>)
}

export default Entry;