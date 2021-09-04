import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { IconLogo } from '../../icons';
import { email, navLinks } from '../../../config';
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
        document.body.classList.add('blur');
    } else {
        document.body.classList.remove('blur');
    }
    console.log(openMenu);

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
                        <Linked href={`mailto:${email}`}>
                            <SmallButton>Resume</SmallButton>
                        </Linked>
                    </NavMenu>
                </NavContainer>
            </Nav >
        </ >
    );
};

export default Index;