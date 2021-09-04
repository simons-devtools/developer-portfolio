import React from 'react';
import { Email } from './EmailElements';
import { email } from '../../../config';
import { Linked } from '../../shared';

const Index = () => {
    return (
        <Email>
            <Linked href={`mailto:${email}`}>
                {email}
            </Linked>
        </Email>
    );
};

export default Index;