import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const StyledLogo = styled.span`
    position: fixed;
    top: 15%;
    right: 15%;
    bottom: 15%;
    left: 15%;
    ${({ theme }) => theme.mixins.fadeInAll}
    svg {
        width: 100%;
    }
`;

const IconLoader = () => {
  return (
    <StyledLogo>
      <Icon name="Logo" />
    </StyledLogo>
  );
};

export default IconLoader;