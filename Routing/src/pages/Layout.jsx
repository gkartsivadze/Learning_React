import React from "react"
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <footer>
                <h1>This is a footer</h1>
            </footer>
        </>
    )
}