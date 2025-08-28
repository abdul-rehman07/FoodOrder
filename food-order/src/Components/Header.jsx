import React from "react";
import logo from "../assets/logo.jpg";

function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logoImg" />
                <h1>FOOD ORDER</h1>
            </div>
            <div>
                <nav>
                    <button>Cart(0)</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
