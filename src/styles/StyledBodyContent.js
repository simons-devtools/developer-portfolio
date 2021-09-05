import styled from 'styled-components';

const StyledBodyContent = styled.div`
    width: 93.5%;
    margin-left: auto;
    margin-right: auto;
    ${({ theme }) => theme.mixins.fadeInAll}

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0 25px 0 25px;
    }
`;

export default StyledBodyContent;