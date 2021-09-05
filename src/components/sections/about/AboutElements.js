import styled from 'styled-components';

export const StyledAboutWrapper = styled.section`
    padding: 100px 50px;
    @media screen and (max-width: 768px) {
        padding: 100px 0px;
    }
`;

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledAboutLeft = styled.div`
    width: 60%;
    margin-right: 30px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0px 0px 50px 0px;
    }
`;

export const StyledAboutRight = styled.div`
    position: relative;
    width: 35%;
    height: 100%;
    @media screen and (max-width: 768px) {
        width: 80%;
        height: 100%;
        margin: 0px auto;
    }
    .imgStyled {
        border-radius: var(--border-radius);
        z-index: 10;
        @media screen and (max-width: 768px) {
            width: inherit !important;
            height: inherit !important;
        }
        &::after {
            position: absolute;
            top: 0;
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-color: var(--green);
            /* filter: blur(1px); */
            opacity: 50%;
        }
        &:hover::after {
            transition: var(--transition);
            opacity: 0;
        }
    }
    &:hover > span {
            transform: translate(-5px, -5px);
            transition: var(--transition);
        }
`;

export const Span = styled.span`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 5%;
    display: inline-block;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    @media screen and (max-width: 768px) {
        width: inherit !important;
        height: inherit !important;
    }
`;

export const StyledList = styled.ul`
    ${({ theme }) => theme.mixins.fancyList}
    li {
        color: var(--slate);
        display: inline-block;
        width: 50%;
        margin: 3px 0;
    }
`;
