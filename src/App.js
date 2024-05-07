import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import Cart from "./components/cart/Cart";
import Entry from "./components/authentification/entry/Entry";
import Registration from "./components/authentification/registration/Registration";
import { AuthProvider } from "./components/context/AuthContext";
import AddItemPage from "./components/mainPage/AddItemPage";
import "./App.css"
import OrdersPage from "./components/mainPage/OrdersPage";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Entry/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/main-page" element={<MainPage/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/add-item" element={<AddItemPage/>}></Route>
          <Route path="/orders" element={<OrdersPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
