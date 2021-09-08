import React from 'react';
import './Contact.modules.css';

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <strong>04. What's Next?</strong>
            <h1>Get In Touch</h1>
            <article>
                Although I'm not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </article>
            <div className="show-more-btn">
                <a
                    href="mailto:simon.hembrom52@gmail.com"
                    className="get-in-touch-btn"
                >Say Hello</a>
            </div>
        </div>
    );
};

export default Contact;