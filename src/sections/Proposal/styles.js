import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.grey};
    padding: 2rem;
    padding-top: 10rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
`;

export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const Subtitle = styled.h3`
    color: ${props => props.theme.colors.secondary};
    font: 700 ${props => props.theme.fontSizes.small} ${props => props.theme.fonts.join(", ")}; 
`;

export const Text = styled.p`
    color: ${props => props.theme.colors.secondary};
    font: 300 ${props => props.theme.fontSizes.small} ${props => props.theme.fonts.join(", ")};
    line-height: 2;
`;