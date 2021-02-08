import React from 'react';

import logo from '../../assets/images/logo.png';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import logoWwcode from '../../assets/images/logo-wwcode.png';

import { Container, WWCodeLogo, WWCodeImage, ListMenu, ListItem, ListItemLink, SocialMedia, SocialMediaTitle, SocialMediaList, SocialMediaListItem } from './styles';

export default function Footer() {
  return (
    <Container>
      <WWCodeLogo>
        <WWCodeImage
          src={logo}
          alt="logo"
          title="Women Dev Project"
        />
      </WWCodeLogo>

      <ListMenu>
        <ListItem>
          <ListItemLink href="#home">Home</ListItemLink>
          <ListItemLink href="#about">Sobre</ListItemLink>
          <ListItemLink href="#proposal">Nossa Proposta</ListItemLink>
          <ListItemLink href="#projects">Projetos</ListItemLink>
          <ListItemLink href="#team">Equipe</ListItemLink>
          <ListItemLink href="#contact">Contato</ListItemLink>
        </ListItem>
      </ListMenu>

      <SocialMedia>
        <SocialMediaTitle>Mídia Social</SocialMediaTitle>
        <SocialMediaList>
          <SocialMediaListItem>
            <a href="https://github.com/womenwhocoderecife">
              <figure className="footer__figure">
                <img src={github} alt="logo" title="github" />
              </figure>
            </a>
          </SocialMediaListItem>

          <SocialMediaListItem>
            <a href="https://www.instagram.com/wwcoderecife/">
              <figure className="footer__figure">
                <img src={instagram} alt="logo" title="instagram" />
              </figure>
            </a>
          </SocialMediaListItem>

          <SocialMediaListItem>
            <a href="https://twitter.com/WWCode_Recife">
              <figure className="footer__figure">
                <img src={twitter} alt="logo" title="twitter" />
              </figure>
            </a>
          </SocialMediaListItem>
        </SocialMediaList>
      </SocialMedia>
      
      <ListMenu>
        <ListItem>
          <SocialMediaTitle>Iniciativa</SocialMediaTitle>
        </ListItem>
        
        <ListItem>
          <a href="https://www.womenwhocode.com/recife">
            <WWCodeLogo>
              <WWCodeImage
                src={logoWwcode}
                alt="logo WWCode"
                title="logo WWCode"
              />
            </WWCodeLogo>
          </a>
        </ListItem>
      </ListMenu>
    </Container>
  );
}
