import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    padding: 2rem;
    padding-top: 10rem;
    width: 100%;
    background-color: ${props => props.theme.colors.lightViolet};
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 40%;
`;

export const Content = styled.div`
    width: 40%;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const Text = styled.p`
    text-align: justify;
    color: ${props => props.theme.colors.secondary};
    font: 300 ${props => props.theme.fontSizes.small} ${props => props.theme.fonts.join(", ")};
    line-height: 2;
`;