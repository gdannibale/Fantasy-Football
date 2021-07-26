import React from 'react';
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="https://youtu.be/R9o72SQfty0" autoPlay loop muted />
            <h1>A League</h1>
            <p>Who's going to draft Matt Stafford?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" 
                buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" 
                buttonSize="btn--large">
                    Watch Highlights <i className="far fa-play-circle"/>
                </Button>
            </div>

            
        </div>
    )
}

export default HeroSection
