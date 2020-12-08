import styled from 'styled-components'
import backgroundImage from '../../assets/images/banner.png'

export const Container = styled.section`
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const  Title = styled.h1`
    color: ${props => props.theme.colors.lightSecondary};
    font: 700 ${props => props.theme.fontSizes.medium} ${props => props.theme.fonts.join(", ")};
    padding: 0 1rem;
    text-align: center;

    @media(min-width: 570px) {
        font-size: ${props => props.theme.fontSizes.large}
    }
`;