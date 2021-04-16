import React from 'react';

import logo from '../../assets/images/logo.png';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import logoWwcode from '../../assets/images/logo-wwcode.png';

import {
  Container,
  WWCodeLogo,
  WWCodeImage,
  ListMenu,
  ListItem,
  ListItemLink,
  SocialMedia,
  SocialMediaTitle,
  SocialMediaList,
  SocialMediaListItem,
  Iniciative,
  IniciativeTitle,
} from './styles';

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
        </ListItem>
        <ListItem>
          <ListItemLink href="#about">Sobre</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="#proposal">Nossa Proposta</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="#projects">Projetos</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="#team">Equipe</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="#contact">Contato</ListItemLink>
        </ListItem>
      </ListMenu>

      <SocialMedia>
        <SocialMediaTitle>Mídia Social</SocialMediaTitle>
        <SocialMediaList>
          <SocialMediaListItem>
            <a
              href="https://github.com/womenwhocoderecife"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={github} alt="logo" title="github" />
              </figure>
            </a>
          </SocialMediaListItem>

          <SocialMediaListItem>
            <a
              href="https://www.instagram.com/wwcoderecife/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={instagram} alt="logo" title="instagram" />
              </figure>
            </a>
          </SocialMediaListItem>

          <SocialMediaListItem>
            <a
              href="https://twitter.com/WWCode_Recife"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={twitter} alt="logo" title="twitter" />
              </figure>
            </a>
          </SocialMediaListItem>
        </SocialMediaList>
      </SocialMedia>

      <Iniciative>
        <IniciativeTitle>Iniciativa</IniciativeTitle>

        <a
          href="https://www.womenwhocode.com/recife"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WWCodeLogo>
            <WWCodeImage
              src={logoWwcode}
              alt="logo WWCode"
              title="logo WWCode"
            />
          </WWCodeLogo>
        </a>
      </Iniciative>
    </Container>
  );
}
