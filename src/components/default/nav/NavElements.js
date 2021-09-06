import styled from 'styled-components';

export const Nav = styled.nav`
    color: inherit !important;
    background-color: transparent;
`;

export const NavContainer = styled.div`
    ${({ theme }) => theme.mixins.flexBetween}
    height: var(--nav-height);
`;

export const NavLogo = styled.div`
    width: 52px;
    height: 52px;
`;

export const MobileIcon = styled.div`
    display: none;
    width: 52px;
    height: 52px;
    color: var(--green);
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: block;
        border: ${(props) => (props.openMenu ? '2px dashed var(--green)' : 'none')};
        z-index: 10;
        transition: var(--transition);
    }
`;

export const NavMenu = styled.ul`
    ${({ theme }) => theme.mixins.flexBetween}

    @media screen and (max-width: 768px) {
        display: ${(props) => (props.openMenu ? 'flex' : 'none')};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        width: 75%;
        height: 100%;
        padding-top: 30px;
        background-color: var(--lightest-navy);
        transition: var(--transition);
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
    }
`;

export const NavItem = styled.li`
    font-size: var(--fz-xxs);
    letter-spacing: 2px;
    margin-right: 30px;
    counter-increment: item 1;
    a {
        color: var(--lightest-slate);
    }
    &::before {
        content: '0' counter(item) '.';
        display: inline-block;
        color: var(--green);
        font-size: var(--fz-xxs);
        margin-right: 5px;
    }
    @media screen and (max-width: 768px) {
        font-size: var(--fz-md);
        margin: 0 0 40px 0;
        &::before {
            display: block;
            text-align: center;
            font-size: var(--fz-xs);
            margin-right: 0px;
        }
    }
`;
