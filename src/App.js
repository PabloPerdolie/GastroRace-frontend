import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import Cart from "./components/cart/Cart";
import Entry from "./components/authentification/entry/Entry";
import Registration from "./components/authentification/registration/Registration";
import AddItemPage from "./components/mainPage/AddItemPage";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { authSuccess, selectUserData } from "./app_state/store/reducers/authSlice";
import Cookies from "universal-cookie";
import OrdersPage from "./components/orders/Orders";


function App() {

    const cookies = new Cookies()

    const dispatch = useDispatch()

    useEffect(() => {
        const auth = cookies.get('token')
        if (auth) {
            dispatch(authSuccess(cookies.get('isAdmin')))
        }
    }, [])

    const auth = useSelector(selectUserData)

    return (
        <div className="App">
            <BrowserRouter className="App">
                  <Routes>
                      {auth.userData
                          ? <>
                              <Route path="/main-page" element={<MainPage/>}></Route>
                              <Route path="/cart" element={<Cart/>}></Route>
                              {auth.admin && <Route path="/add-item" element={<AddItemPage/>}></Route>}
                              <Route path="/orders" element={<OrdersPage/>}></Route>
                              <Route path="/*" element={<MainPage/>}></Route>
                          </>
                          : <>
                              <Route path="/" element={<Entry/>}></Route>
                              <Route path="/registration" element={<Registration/>}></Route>
                              <Route path="/*" element={<Entry/>}></Route>
                          </>
                      }
                  </Routes>
            </BrowserRouter>
        </div>
    );
    }

export default App;
