import React from 'react';
import { Linked, BigButton } from '../../shared';
import { StyledContainer } from './ContactElements';
import { email } from '../../../config';

const Index = () => {
    return (
        <StyledContainer id="contact">
            <p className="one">04. What's Next?</p>
            <h1 className="two">Get In Touch</h1>
            <p className="three">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <Linked href={`mailto:${email}`}>
                <BigButton>Say Hello</BigButton>
            </Linked>
        </StyledContainer>
    );
};

export default Index;