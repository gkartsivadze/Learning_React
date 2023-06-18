import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
    return (
        <div className="container">
            <Navbar toggleDarkMode={() => setDarkMode(prev => !prev)} darkMode={darkMode}/>
            <Main darkMode={darkMode} />
        </div>
    )
}