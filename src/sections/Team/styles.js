import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.lightViolet};
    padding: 2rem;
    padding-top: 10rem;
`;

export const Content = styled.ul`
    max-width: 1200px;
    width: 100%;
    justify-items: center;
    padding: 20px 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    @media (min-width: 880px) {
        grid-template-columns: repeat(2, 1fr);
    }
      
    @media (min-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;