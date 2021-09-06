import styled from 'styled-components';

export const StyledContainer = styled.section`
    width: 50%;
    text-align: center;
    .one {
        color: var(--green);
    }
    .two {
        font-size: 46px;
        margin: 10px 0;
    }
    .three {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
