import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    width: 100%;
    background: ${props => props.theme.colors.lightSecondary};
    border: 1px solid #E1E7ED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 20px;

    :hover {
        transform: translateY(-5px) scale(1.005) translateZ(0);
    }
`;

export const Figure = styled.figure`
    margin: 0;
`;

export const Image = styled.img`
    width: 60%;
    display: block;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.darkPrimary};
    font: 500 28px 'Roboto', sans-serif;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    margin: 5px 0;
`;

export const Text = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.secondary};
    font: 300 16px 'Roboto', sans-serif;
    margin: 0 0 5px 0;
    padding: 5px
`;

export const SocialNetwork = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SocialNetworkItem = styled.li`
    margin: 5px 5px 0 0;
`;