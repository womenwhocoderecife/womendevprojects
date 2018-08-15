import React from 'react';

import './assets/style/menu.css';
import logo from './assets/images/logo.png';

const Menu = () => (
    <header class="main-header">
    <a class="site-logo" href="/">
        <img className="header__img" src={logo} alt="Logo Women Dev Projects" />
    </a>
    
    <nav class="menu">
        <ul className="menu__list">
            <li className="menu__list__item"><a href="#">Home</a></li>
            <li className="menu__list__item"><a href="#">Sobre</a></li>
            <li className="menu__list__item"><a href="#">Nossa Proposta</a></li>
            <li className="menu__list__item"><a href="#">Equipe</a></li>
            <li className="menu__list__item"><a href="#">Portfólio</a></li>
            <li className="menu__list__item"><a href="#">Depoimentos</a></li>
            <li className="menu__list__item"><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>  
);

export default Menu;
