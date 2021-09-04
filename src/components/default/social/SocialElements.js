import styled from "styled-components";

export const IconContainer = styled.ul`
    position: fixed;
    bottom: -1%;
    text-align: center;
    &::after {
        content: '';
        width: 2.5px;
        height: 90px;
        display: inline-block;
        background-color: var(--light-slate);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const IconItem = styled.li`
    width: 20px;
    height: 20px;
    margin-bottom: 30px;
    &:hover {
        transform: var(--translateY);
        transition: var(--transition);
    }
`;
