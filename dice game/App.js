import React, { useState } from "react";
import Die from "./Die";

function App() {
    const [dies, setDies] = useState([]);
    return <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Die dies={dies} />
    </main>
}

export default App;