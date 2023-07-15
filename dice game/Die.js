import React from "react";

function Die({ value, isHeld, holdDice }) {
    return (
        <div onClick={holdDice} style={isHeld ? {backgroundColor: "#59E391"} : {}}>
            {value}
        </div>
    )
}

export default Die;