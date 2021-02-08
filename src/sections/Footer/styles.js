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

  @media( min-width: 760px) {
    .footer {
      flex-direction: row;
      align-items: flex-start; 
      justify-content: space-around;
    }
  }
`;

export const WWCodeLogo = styled.figure`
    margin: 0;
`;

export const WWCodeImage = styled.img`
    width: 150px;
    margin-top:-10px;
`;

export const ListMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media( min-width: 760px) {
        align-items: baseline;
        justify-content: flex-end;
        margin-bottom: 0;
      }
`;

export const ListItem = styled.li`
    margin-top: 5px;
    padding: 5px;
`;

export const ListItemLink = styled.a`
    margin: 0;
    color:#47525E;
    font-weight: 300 !important;
    font: 500 1em 'Roboto', sans-serif;
    text-decoration: none;
`;

export const SocialMedia = styled.div`
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media( min-width: 760px) {
        align-items: baseline;
        justify-content: flex-end;
        margin-bottom: 0;
  }
`;

export const SocialMediaTitle = styled.h3`
    margin-top: 10px;
    color: ${props => props.theme.colors.darkPrimary};
    font: 500 1em 'Roboto', sans-serif;
`;

export const SocialMediaList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SocialMediaListItem = styled.li`
    margin: 5px 5px 0 0;
`;
