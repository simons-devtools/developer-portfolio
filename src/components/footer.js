import React from 'react';
import styled from 'styled-components';
import { Linked } from './shared';
import { Icon } from './icons';

const StyledFooter = styled.div`
    width: 20%;
    margin: 30px auto;
    text-align: center;
    .one {
        display: block;
    }
    small {
        font-family: monospace;
        color: var(--light-slate);
        margin: 0px 10px;
        svg {
            width: 15px;
            height: 15px;
        }
    }
    &:hover {
        small {
            color: var(--green) !important;
            transition: var(--transition);
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Linked
                href="https://github.com/spsimon-dev-tools/simon-v1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <small className="one">Designed & Built by Simon Hembrom</small>
                <small><Icon name="Star" /> 24,874</small>
                <small><Icon name="Fork" /> 48,952</small>
            </Linked>
        </StyledFooter>
    );
};

export default Footer;