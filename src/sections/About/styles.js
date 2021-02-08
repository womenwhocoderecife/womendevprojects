import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    padding-top: 10rem;

    @media (max-width: 1024px) {
        display: grid;
    }
  `;

export const Content = styled.div`
    width: 50%;
    padding-left: 2%;

    p {
        text-align: justify;
        color: ${props => props.theme.colors.secondary};
        font: 300 ${props => props.theme.fontSizes.small} ${props => props.theme.fonts.join(', ')};
        line-height: 2;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
  `;

export const Figure = styled.figure`
    width: 50%;

    img {
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
  `;

  