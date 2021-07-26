import React from 'react';
import { Button } from './Button';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Credits</p>
                <p className="footer-subscription-text">THE REIGNING CHAMP: Timmers OG and YOUR FAVORITE AUCTIONEER: Gina D</p>
                <div className="input-areas">
                    <form>
                        <input type="team name" name="team name" placeholder="Your Team Name" className="footer-input" />
                        <Button buttonStyle="btn--outline">LETS PLAY</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        {/* <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link> */}
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
