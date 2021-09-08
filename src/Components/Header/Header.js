import React from 'react';
import './Header.modules.css';
import Social from './Social/Social';
import Head from './Head/Head';
import Email from './Email/Email';

const Header = () => {
    return (
        <div className="header-container">
            <div className="main">
                <Head />
            </div>
            <div className="side-content">
                <div className="social">
                    <Social />
                </div>
                <div className="email">
                    <Email />
                </div>
            </div>
        </div>
    );
};

export default Header;