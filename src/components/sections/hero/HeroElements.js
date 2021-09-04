import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 100px;
    @media screen and (max-width: 768px) {
        padding-top: 0px;
        padding-bottom: 50px;
    }

    h1 {
        color: var(--green);
        font-size: var(--fz-lg);
        letter-spacing: 1.5px;
    }
    h2 {
        color: var(--lightest-slate);
        margin: 20px 0 20px 0;
    }
    h3 {
        color: inherit;
        margin: 20px 0 30px 0;
    }
    p {
        max-width: 540px;
    }
    .email-button {
        ${({ theme }) => theme.mixins.bigButton};
        margin-top: 50px;
    }
`;

