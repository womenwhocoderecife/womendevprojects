import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  grid-column: 1 / -1;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 50px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    grid-column: 1/-1;
  }
`;

export const WWCodeLogo = styled.figure`
  margin: 0;
`;

export const WWCodeImage = styled.img`
  width: 150px;
  margin-top: -10px;
`;

export const ListMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-left: 0;
  list-style: none;
  margin: 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  margin-top: 5px;
  padding: 5px;
`;

export const ListItemLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font: 300 1em 'Roboto', sans-serif;

  :hover {
    border-bottom: 1px solid
      ${(props) => props.theme.colors.darkPrimary};
  }
`;

export const SocialMedia = styled.div`
  align-items: baseline;
  justify-content: flex-end;
  margin-bottom: 0;
`;

export const SocialMediaTitle = styled.h3`
  color: ${(props) => props.theme.colors.darkPrimary};
  font: 500 1em Roboto, sans-serif;
  margin: 0;
  padding-top: 10px;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialMediaListItem = styled.li`
  margin: 5px 5px 0 0;

  figure {
    margin: 0;
  }

  figure:hover {
    border-bottom: 1px solid
      ${(props) => props.theme.colors.darkPrimary};
  }
`;

export const Iniciative = styled.div`
  display: grid;
`;

export const IniciativeTitle = styled(SocialMediaTitle)`
  padding-left: 10px;
  margin-bottom: 5px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
