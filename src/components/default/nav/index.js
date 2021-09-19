import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { IconLogo } from '../../icons';
import { navLinks } from '../../../config';
import { SmallButton, Linked } from '../../shared';
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
} from './NavElements';

const Index = () => {
    // Toggle menu and blur the body content:
    const [openMenu, setOpenMenu] = useState(false);

    if (openMenu) {
        // document.body.classList.add('blur');
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "blur";
    } else {
        // document.body.classList.remove('blur');
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "unblur";
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        <Linked href="/" rel="noopener">
                            <IconLogo />
                        </Linked>
                    </NavLogo>
                    <MobileIcon
                        openMenu={openMenu}
                        onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <BiX /> : <BiMenuAltRight />}
                    </MobileIcon>
                    <NavMenu openMenu={openMenu}>
                        {
                            navLinks &&
                            navLinks.map(({ name, url }, i) =>
                                <NavItem key={i}>
                                    <Linked
                                        href={url}
                                        rel="noopener noreferrer"
                                        onClick={() => setOpenMenu(!openMenu)}
                                    >{name}</Linked>
                                </NavItem>
                            )
                        }
                        <Linked
                            href="https://drive.google.com/file/d/1-yHgh_ZOpyg9am2KTLBfzaHuntp7ak-7/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer noreferrer"
                        >
                            <SmallButton>Resume</SmallButton>
                        </Linked>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Index;
