import styled from 'styled-components';

export const StyledProjectContainer = styled.section`
    /* ..... */
`;

export const StyledHeader = styled.div`
    h2, p {
        text-align: center;
    }
    p {
        color: var(--green);
        letter-spacing: 2px;
    }
`;

export const StyledProjectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
`;

export const StyledProject = styled.div`
    flex-basis: 32.3%;
    padding: 30px 20px;
    margin: 8px 0;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    box-shadow: var(--navy-shadow);
    &:hover {
        transform: translateY(-5px);
        transition: var(--transition);
    }

    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
`;

export const StyledIcon = styled.div`
    ${({ theme }) => theme.mixins.flexBetween}
    .folder-icon > svg {
        width: 40px;
        height: 40px;
        color: var(--green) !important;
    }
    .github-icon > svg {
        width: 25px;
        height: 25px;
        color: var(--light-slate) !important;
        &:hover {
            color: var(--green) !important;
            transition: var(--transition);
        }
    }
`;

export const StyledArticle = styled.article`
    padding: 40px 0px 20px 0px;
    transition: var(--transition);
    &:hover {
        h3 {
            color: var(--green);
        }
    }
    p {
        padding-top: 5px;
        font-size: var(--fz-sm);
    }
`;

export const StyledTechnology = styled.ul`
    display: flex;
    flex-direction: row;
    li {
        color: var(--slate);
        margin-right: 20px;
    }
`;

export const StyledMoreButton = styled.div`
    text-align: center;
    margin-top: 50px; 
`;