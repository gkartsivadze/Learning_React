import React, { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld === true);
        const value = dice[0].value;
        const allSame = dice.every(die => die.value === value)
        if (allHeld && allSame) {
            setTenzies(false);
            console.log("you won");
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateNewDie()
            }))
        } else {
            setTenzies(false);
            setDice(allNewDice);
        }
    }
    
    function rollDice() {
        if(tenzies) return setDice(allNewDice);
        setDice(prev => prev.map(die => die.isHeld === true ?
            die :
            generateNewDie()
        ))
    }

    function holdDice(id) {
        setDice(prev => prev.map(die => {
            return die.id === id ?
                { value: die.value, isHeld: !die.isHeld, id: die.id } :
                die
        }))
    }

    return <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        {tenzies && <Confetti />}
        <div className="dice-container">
            {dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies ? "New game" : "Roll"}</button>
    </main>
}

export default App;