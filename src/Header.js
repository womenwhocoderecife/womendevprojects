import React from 'react';

import Menu from './Menu'

import header from './assets/style/header.css';

const Header = () => (
  <header className="header">
    <Menu />
    <figure className="header__figure">
      <h1 className="header__text">
        Juntas! Desenvolvendo Tecnologia com Impacto
      </h1>
    </figure>
  </header>
);

export default Header;
