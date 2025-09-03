import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./Button.jsx";

function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logoImg" />
                <h1>FOOD ORDER</h1>
            </div>
            <div>
                <nav>
                    <Button textonly >Cart(0)</Button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
