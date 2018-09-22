import React from 'react';

import Menu from '../Menu';

import logo from '../assets/images/logo.png';

import './index.css';

const Header = () => (
  <header className="header">
    <Menu />
    <a className="menu__logo" href="/">
      <figure className="menu__figure header__figure">
        <img
          className="menu__img"
          src={logo}
          alt="Logo Women Dev Projects"
        />
      </figure>
    </a>
    <h1 className="header__text">
      Juntas! Desenvolvendo Tecnologia com Impacto
    </h1>
  </header>
);

export default Header;
