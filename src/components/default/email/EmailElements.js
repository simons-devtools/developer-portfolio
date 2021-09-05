import styled from 'styled-components';

export const Email = styled.div`
    color: var(--lightest-slate);
    font-size: var(--fz-xs);
    letter-spacing: 3px;
    position: fixed;
    right: 0;
    bottom: 0;
    transform: translate(100px, -140px) rotate(90deg);
    &::after {
        content: '';
        display: inline-block;
        width: 90px;
        height: 2px;
        background-color: var(--light-slate);
        margin: 0 0 2px 30px;
    }
    & > a:hover {
        transform: var(--translateX);
        transition: var(--transition);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
