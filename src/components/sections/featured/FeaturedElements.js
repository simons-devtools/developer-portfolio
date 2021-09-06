import styled from 'styled-components';

export const StyledFeaturedContainer = styled.section`
    /* Any styles here... */
`;

export const StyledFeaturedWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.id === 2 ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    margin: ${props => props.id === 2 && '100px 0px'};
    
    @media screen and (max-width: 768px) {
        position: relative;
        flex-direction: column;
        margin: ${props => props.id === 2 && '50px 0px'};
    }
`;

export const ImageOverlay = styled.div`
    flex-basis: 57%;
    height: 100%;
    border-radius: var(--border-radius);
    .gatsby-image {
        width: 100%;
        height: 320px;
        border-radius: var(--border-radius);
        
        @media screen and (max-width: 768px) {
            .gatsby-image {
                width: 100%;
                height: 100%;
                filter: blur(2px) brightness(0.5);
                pointer-events: none;
                user-select: none;
            }
        }
    }
`;

export const FeaturedElements = styled.div`
    position: relative;
    flex-basis: 43%;
    height: 100%;
    text-align: ${(props) => props.id === 2 ? 'left' : 'right'};
    .featured-one {
        color: var(--green);
    }
    .featured-two {
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 20px;
        transition: var(--transition);
        &:hover {
            color: var(--green);
        }
    }
    .featured-three {
        padding: 20px 25px;
        margin: 0px ${(props) => props.id === 2 ? '-60px' : '0px'} 0px ${(props) => props.id !== 2 ? '-60px' : '0px'};
        background-color: var(--light-navy);
        border-radius: var(--border-radius);
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 0;
        text-align: left;
        padding: 10px 15px;
        .featured-three {
            font-size: var(--fz-sm);
            padding: 5px 0px 5px 0px;
            margin: 0px;
            background-color: transparent;
        }
    }
`;

export const StyledTechnology = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.id === 2 ? 'flex-start' : 'flex-end'};
    li {
        color: inherit !important;
        padding: ${(props) => props.id === 2 ? '20px 20px 20px 0px' : '20px 0px 20px 20px'};
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        li {
            color: inherit !important;
            padding: 10px 10px 10px 0px;
        }
    }
`;

export const StyledLinkedIcon = styled.ol`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.id === 2 ? 'flex-start' : 'flex-end'};
    li {
        width: 22px;
        height: 22px;
        cursor: pointer;
        margin: ${(props) => props.id === 2 ? '0px 30px 0px 0px' : '0px 0px 0px 30px'};
        transition: var(--transition);
        &:hover {
            color: var(--green);
        }
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        li {
            margin-left: 0px;
            margin-right: 30px;
        }
    }
`;
