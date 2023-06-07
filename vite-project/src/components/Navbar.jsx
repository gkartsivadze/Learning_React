import React from "react";
import logo from "../assets/react.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React logo" />
            <h2>ReactFacts</h2>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}