import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app_state/store/actionCreators/authActions";
import { selectUserData } from "../../app_state/store/reducers/authSlice";

function Nav(){
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const auth = useSelector(selectUserData)

    return(
        <nav className="navigation">
                <div className="nav-list">
                    <ul className="navigation-list">
                        <li className="navigation-item">{<Link to="/cart">Cart</Link>}</li>
                        <li className="navigation-item">{<Link to="/main-page">Catalog</Link>}</li>
                        <li className="navigation-item">{<Link to="/orders">Orders</Link>}</li>
                        <li className="navigation-item" onClick={(e) => {
                            e.preventDefault()
                            dispatch(logout())
                            navigate('/')
                        } 
                        }>
                            <span>Log out</span>
                        </li>
                        {auth.admin && <li className="navigation-item">{<Link to="/add-item">Add item</Link>}</li>}
                    </ul>
                </div>
        </nav>
    )
}

export default Nav;