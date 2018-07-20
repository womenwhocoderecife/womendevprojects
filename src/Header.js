import React from 'react';

import header from './assets/style/header.css';
import logo from './assets/images/logo.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='logo' />
    <h1 className='header__text'>Juntas! Desenvolvendo Tecnologia <br/> com Impacto</h1>
  </header>
);

export default Header;
