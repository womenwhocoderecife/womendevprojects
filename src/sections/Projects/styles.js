import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
  padding-top: 10rem;
  width: 100%;
  padding-left: 5%;
`;

export const List = styled.div`
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

export const Box = styled.a`
  display: flex;
  flex-direction: column;

  max-width: 350px;
  width: 100%;
  background: ${(props) => props.theme.colors.lightSecondary};
  border: 1px solid #e1e7ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 20px;
  text-decoration: none;

  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
  }
`;

export const Image = styled.img`
  max-height: 116px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font: 300 16px 'Roboto', sans-serif;
  margin: 0 0 5px 0;
  padding: 5px 0;
`;

export const Team = styled.ul`
  list-style-type: none;
  color: ${(props) => props.theme.colors.secondary};
  font: 300 16px 'Roboto', sans-serif;
  margin: 0 0 5px 0;
  padding: 10px;
`;
export const TeamTitle = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  font: 500 16px 'Roboto', sans-serif;
`;

export const TeamSubTitle = styled.li`
  color: ${(props) => props.theme.colors.secondary};
  font: 500 16px 'Roboto', sans-serif;
`;
