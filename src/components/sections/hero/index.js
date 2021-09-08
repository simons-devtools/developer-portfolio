import React, { Fragment } from 'react';
import { StyledHeader } from './HeroElements';
import { email } from '../../../config';

const Index = () => {
    const one = <h1>Hi, my name is</h1>;
    const two = <h2 className="big-heading">Msimon Hembro.</h2>;
    const three = <h3 className="big-heading">I build things for the web.</h3>;
    const four = (
        <>
            <p>
                I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on
                building accessible, human-centered products at {' '}
                <a href="https://msimon.netlify.app" target="_blank" rel="noreferrer">
                    MsimonH
                </a>
                .
            </p>
        </>
    );
    const five = (
        <a
            className="email-button"
            href={`mailto:${email}`}
            rel="noreferrer">
            Contact me for hire!
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <StyledHeader>
            <>
                {items &&
                    items.map((item, i) =>
                        <Fragment key={i}>{item}</Fragment>
                    )
                }
            </>
        </StyledHeader>
    );
};

export default Index;