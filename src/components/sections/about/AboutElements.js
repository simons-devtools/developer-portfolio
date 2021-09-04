import styled from 'styled-components';

export const StyledAboutWrapper = styled.section`
    /* any styles here... */
`;

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0px;
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
    height: 320px;
    @media screen and (max-width: 768px) {
        /* width: 100%; */
        height: 300px;
        margin: 0px auto;
    }
`;

// const Image = styled(img)`
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     z-index: 10;
//     border-radius: var(--border-radius);
//     filter: blur(1px) brightness(0.8);
//     transition: var(--transition);
// `;

export const Span = styled.span`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 5%;
    display: inline-block;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
`;

