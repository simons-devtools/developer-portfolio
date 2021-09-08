import React, { useState, useEffect } from 'react';
import './Navigation.modules.css';
import logo from '../../Assets/Icons/logo.png';

const Navigation = () => {
    const [show, setShow] = useState(true)
    const [isActive, setIsActive] = useState(false);

    // Handle toggle button:
    const handleToggleBtn = (toggle) => {
        setIsActive(toggle);
        if (!isActive) {
            const burger = document.getElementById('burger');
            burger.style.display = 'block';
        } else {
            const burger = document.getElementById('burger');
            burger.style.display = 'none';
        }
    }

    // Handle navbar on page scroll:
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    // Navbar menus items:
    const myMenus = [
        { name: 'About', route: '#about' },
        { name: 'Experience', route: '#experience' },
        { name: 'Work', route: '#work' },
        { name: 'Contact', route: '#contact' },
        { name: 'Resume', route: 'https://drive.google.com/file/d/1vnOblp4-24rqx1rVII6UAQyysiVZMwbT/view?usp=sharing' },
    ];

    return (
        <div>
            <div className={`deactive-navbar ${show && 'nav-container'}`}>
                <a href="/"><img src={logo} alt="" /></a>

                {/* Hamburger button */}
                <div
                    onClick={() => handleToggleBtn(!isActive)}
                    className='hamburger'
                ><span></span></div>

                {/* Main menu items */}
                <div id={isActive ? 'enable' : 'disable'}>
                    <ol id="burger" className="navbar">
                        {
                            myMenus.map(({ name, route }, i) =>
                                isActive ?
                                    <li key={i} onClick={() => handleToggleBtn(!isActive)}>
                                        <a href={route}>{name}</a>
                                    </li> :
                                    <li key={i}>
                                        <a href={route}>{name}</a>
                                    </li>
                            )
                        }
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default Navigation;