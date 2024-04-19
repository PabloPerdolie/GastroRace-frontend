import React from "react";
import Catalog from "./catalog/Catalog";
import Nav from "./Nav";

function MainPage(){
    return(
        <div className="main-page">
            <Nav/>
            <Catalog/>
        </div>
    )
}

export default MainPage;