import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../app_state/store/actionCreators/authActions";
import { useDispatch } from "react-redux";



function Entry(){
    const [user, setUser] = useState({
        username: "", 
        password: ""
    })

    const dispatch = useDispatch()

    const navigate = useNavigate()

    return(
        <div className="entry-main">
            <h2>Entry</h2>
            <form>
                <input type="text" id="login-entry" value={user.username} onChange={event => setUser({...user, username: event.target.value})} required placeholder="login" />
                <input type="password" id="password-entry" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required placeholder="password"/>
                <Link to="/registration">Wanna create an account?</Link>
                <button id="entry"
                onClick={(event)=>{
                    event.preventDefault()
                    dispatch(login(user.username, user.password))
                    navigate('/main-page')
                }}>Entry</button>            
            </form>
            
        </div>)
}

export default Entry;