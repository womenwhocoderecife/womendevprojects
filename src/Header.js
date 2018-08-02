import React from 'react';

import header from './assets/style/header.css';
import logo from './assets/images/logo.png';

const Header = () => (
  <header className="header">
    <figure className="header__figure">
      <img className="header__img" src={logo} alt="logo" />
      <h1 className="header__text">
        Juntas! Desenvolvendo Tecnologia com Impacto
      </h1>
    </figure>
  </header>
);

export default Header;
