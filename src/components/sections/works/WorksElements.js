import styled from 'styled-components';

export const StyledWorkContainer = styled.section`
    padding-left: 150px;
    padding-right: 150px;
    @media screen and (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export const StyledWorkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledTabUL = styled.ul`
    height: 100%;
    border-left: 2px solid var(--lightest-navy);
    li {
        color: inherit;
        padding: 12px 15px;
        cursor: pointer;
        &:hover {
            color: var(--green);
            background-color: var(--light-navy);
        }
        &.active {
            color: var(--green);
            background-color: var(--light-navy);
            border-left: 3px solid var(--green);
            margin-left: -2px;
        }
    }
    @media screen and (max-width: 768px) {
        border-left: none;
        ${({ theme }) => theme.mixins.flexBetween}
        margin-bottom: 40px;
        overflow: scroll;
        overflow-y: hidden;
        overflow-x: auto;
        li {
            &.active {
                border-left: none;
                border-bottom: 1px solid var(--green);
            }
        }
    }
`;

export const StyledTabPanel = styled.div`
    padding: 15px 0 15px 30px;
    ${({ theme }) => theme.mixins.fadeIn}
    p {
        letter-spacing: 2px;
        padding-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 0px;
    }
`;

export const StyledListUL = styled.ul`
    ${({ theme }) => theme.mixins.fancyList}
    li {
        color: inherit !important;
        font-size: var(--fz-sm);
    }
`;
