import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <nav>
                <h1>Hey</h1>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
    )
}