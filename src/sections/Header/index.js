import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

import {
  HeaderStyle,
  Container,
  LogoLink,
  Logo,
  Nav,
  NavList,
  ListItem,
  ListLink,
  MenuToggle,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
} from './styles';

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
      const observer = new IntersectionObserver(entries => {
      
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');

          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(`#${id}`);
          }
        });
      });
      document
        .querySelectorAll('section[id]')
        .forEach(section => observer.observe(section));
    });
  }, []);

  return (
    <HeaderStyle scroll={scroll}>
      <Container>
        <LogoLink
          href="#hero"
        >
          <Logo src={logo} alt="Women Dev Projects" />
        </LogoLink>
        <MenuToggle
          rule="button"
          aria-label="Abrir menu"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <ToggleOne menuVisibility={menuVisibility} />
          <ToggleTwo menuVisibility={menuVisibility} />
          <ToggleThree menuVisibility={menuVisibility} />
        </MenuToggle>
        <Nav menuVisibility={menuVisibility}>
          <NavList menuVisibility={menuVisibility}>
            <ListItem>
              <ListLink
                href="#hero"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Home
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#about"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Sobre
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#proposal"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Nossa Proposta
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#projects"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Projetos
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#team"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Equipe
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#contact"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Contato
              </ListLink>
            </ListItem>
          </NavList>
        </Nav>
      </Container>
    </HeaderStyle>
  );
}