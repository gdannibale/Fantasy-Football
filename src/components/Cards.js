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
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Brandon Andre"
                        path="/teams"/>
                        <CardItem 
                        src="images/Woods.jpg"
                        text="Make sure to select smart keepers!"
                        label="Brandon Woods"
                        path="/teams"/>
                        <CardItem 
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Dan Seiders"
                        path="/teams"/>
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/Allen.jpg"
                        text="Make sure to select smart keepers!"
                        label="Daniel Allen"
                        path="/teams"/>
                        <CardItem 
                        src="images/Cunio.jpg"
                        text="Make sure to select smart keepers!"
                        label="David Cunio"
                        path="/teams"/>
                        <CardItem 
                        src="images/Luke.jpg"
                        text="Make sure to select smart keepers!"
                        label="Jen Luke"
                        path="/teams"/>
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Michael Holehan"
                        path="/teams"/>
                        <CardItem 
                        src="images/Nate.jpg"
                        text="Make sure to select smart keepers!"
                        label="Nate Horsey-Sherrin"
                        path="/teams"/>
                        <CardItem 
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Nick Grinstead"
                        path="/teams"/>
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Rich Denham"
                        path="/teams"/>
                        <CardItem 
                        src="images/default.jpg"
                        text="Make sure to select smart keepers!"
                        label="Robert Kneen"
                        path="/teams"/>
                        <CardItem 
                        src="images/Steve.jpg"
                        text="Make sure to select smart keepers!"
                        label="Steve Westerhoff"
                        path="/teams"/>
                    </ul>
                    <ul className="cards__items">   
                    <CardItem 
                        src="images/Tim.jpg"
                        text="Make sure to select smart keepers!"
                        label="Tim O'Gorman"
                        path="/teams"/>
                        <CardItem 
                        src="images/Will.jpg"
                        text="Make sure to select smart keepers!"
                        label="Will Barton"
                        path="/teams"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
