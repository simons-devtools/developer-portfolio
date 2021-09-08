import React from 'react';
import './Head.modules.css';

const Head = () => {
    return (
        <div className="head-container">
            <div className="big-heading">
                <p>Hi, my name is_</p>
                <h2>Msimon Hembrom.</h2>
                <h3>I build things for the web.</h3>
            </div>
            <div className="touch-me">
                <article>
                    I'm a software developer specializing in building (and occasionally <br />
                    designing) exceptional digital experiences. Currently, I'm focused on building <br />
                    accessible, human-centered products at Upstatement.
                </article>
                <a href="mailto:simon.hembrom52@gmail.com" className="get-in-touch-btn">Get In Touch</a>
            </div>
        </div>
    );
};

export default Head;