import styled from 'styled-components';

// Exported Components:
export const SmallButton = styled.button`
    ${({ theme }) => theme.mixins.smallButton}
    @media screen and (max-width: 768px) {
        ${({ theme }) => theme.mixins.bigButton}
    }
`;

export const BigButton = styled.button`
${({ theme }) => theme.mixins.bigButton}
`;

export const Linked = styled.a`
${({ theme }) => theme.mixins.link}
`;

