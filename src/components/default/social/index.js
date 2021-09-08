import React from 'react';
import { IconContainer, IconItem } from './SocialElements';
import { Linked } from '../../shared';
import { socialMedia } from '../../../config';
import { Icon } from '../../icons';

const Index = () => {
    return (
        <IconContainer>
            {
                socialMedia &&
                socialMedia.map(({ name, url }, i) =>
                    <IconItem key={i}>
                        <Linked href={url} aria-label={name} target="_blank" rel="noreferrer">
                            <Icon name={name} />
                        </Linked>
                    </IconItem>
                )
            }
        </IconContainer>
    );
};

export default Index;