import React from "react";
import Card from './Cardtemp';
import data from '../data';

export default function Main() {
    const cardsList = data.map(item => {
        return (
            <Card 
            key={item.id}
            {...item}
            />
            )
        })  
        return <main>
        <section className="cards-list">
                {cardsList}
            </section>
    </main>
}