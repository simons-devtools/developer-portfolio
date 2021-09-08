import React from 'react';
import './Footer.modules.css'
import Social from '../Header/Social/Social';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/spsimon-dev-tools/simon_portfolio" target={`_blank`}>
                <div className="social-media">
                    <Social />
                </div>
                <div className="my-footer">
                    <small>Designed & Built by Msimon Hembrom</small> <br />
                    <small>&copy;Copy right 2021 </small>
                </div>
            </a>
        </footer>
    );
};

export default Footer;