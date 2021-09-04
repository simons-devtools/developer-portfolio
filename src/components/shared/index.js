import styled from 'styled-components';

// Components Variables:
// const img = function ({ className, src }) {
//     return <img src={src} className={className} alt="img" />
// }

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

// export const Image = styled(img)`
//     width: 100%;
//     height: 100%;
// `;

