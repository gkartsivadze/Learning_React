import React from "react";

function Die({ dies }) {
    return (
        dies.map(elem => <div key={elem}>{elem}</div>)
    )
}

export default Die;