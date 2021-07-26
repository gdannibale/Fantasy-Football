import React from 'react'
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Lets make a team that doesn't suck!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        // src="images/img-9.jpg"
                        text="Make sure to select smart keepers!"
                        label="Fantasy"
                        path="/teams"/>
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Make sure to select smart keepers!"
                        label="Fantasy"
                        path="/teams"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
