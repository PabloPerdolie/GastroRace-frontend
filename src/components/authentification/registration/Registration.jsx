 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../../../app_state/store/actionCreators/authActions";
import { useDispatch } from "react-redux";


function Registration(){

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
    })

    const dispatch = useDispatch()

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
                        dispatch(registration(user.username, user.password, user.email))
                    }}
                >Register</button>
            </form>
            
        </div>
    )
}

export default Registration;