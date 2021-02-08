import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 2rem;
    padding-top: 10rem;
    width: 100%;
    padding-left: 5%;
`;

export const Box = styled.a`
    display: flex;
    flex-direction: column;
    
    max-width: 350px;
    width: 100%;
    background: ${props => props.theme.colors.lightSecondary};
    border: 1px solid #E1E7ED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 20px;
    text-decoration: none;

    :hover {
        transform: translateY(-5px) scale(1.005) translateZ(0);
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.darkPrimary};
    font: 500 28px 'Roboto', sans-serif;
    width: 100%;
    padding: 5px 0;
    margin: 5px 0;  
`;

export const Description = styled.p`
    color: ${props => props.theme.colors.secondary};
    font: 300 16px 'Roboto', sans-serif;
    margin: 0 0 5px 0;
    padding: 5px;
`;

export const Team = styled.ul`
    list-style-type:none;
    color: ${props => props.theme.colors.secondary};
    font: 300 16px 'Roboto', sans-serif;
    margin: 0 0 5px 0;
    padding: 5px;
`;

export const TeamSubTitle = styled.h4`
    color: ${props => props.theme.colors.secondary};
    font: 500 16px 'Roboto', sans-serif;
`;