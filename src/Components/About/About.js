import React from 'react';
import './About.modules.css';
import profile from '../../Assets/Images/me.png';

const About = () => {
    return (
        <div id="about" className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="about-info">
                    <div className="description">
                        <article>Hello! My name is Msimon and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</article> <br />
                        <article>Fast forward to today, and I'm looking for opportunities to work in an advertising agency, a start-up, a huge corporation, and a student-led design studio. Nowadays my main focus is to create accessible, inclusive products and digital experiences for different clients.</article>
                    </div>
                    <div className="recent-tech">
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Express.js</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Wordpress</li>
                            <li>Mongodb cloud</li>
                            <li>Material ui</li>
                        </ul>
                    </div>
                </div>
                <div className="my-photo">
                    <p>
                        <img src={profile} alt="" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;