import React from "react";

export default function Navbar() {
    return (
        <nav>
            <input id="nav_btn" type="button" value="X" />
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}