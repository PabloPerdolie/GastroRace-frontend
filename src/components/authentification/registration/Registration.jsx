 import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import instance from "../../../axios/Axios";


function Registration(){
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
    })

    const navigate = useNavigate()

    const { token, setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        try {
            const response = await instance.post(`/auth/signup`, user)
            setToken(response.data)
            console.log({token})
            navigate("/main-page") 
        } catch (error) {
            console.error('Ошибка авторизации:', error)
        }
    };

    return(
        <div className="registration-main">
            <h2>Registration</h2>
            <form>
                <input type="text" id="login" value={user.username} onChange={event => setUser({...user, username: event.target.value})} required placeholder="name"/>
                <input type="email" id="email" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required placeholder="email" />
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} placeholder="Password" required />
                <input type="password" id="submit" placeholder="Submit password" required />
                <Link to="/">Already have an account?</Link>
                <button id="register"
                    onClick={(event) => {
                        event.preventDefault()
                        console.log(user)
                        handleSubmit()
                    }}
                >Register</button>
            </form>
            
        </div>)
}

export default Registration;