import React from 'react';

import './assets/style/menu.css';
import logo from './assets/images/logo.png';

const Menu = () => (
    <nav className="menu">
        <a className="menu__logo" href="/">
            <figure className="menu__figure">
                <img className="menu__img" src={logo} alt="Logo Women Dev Projects" />
            </figure>
        </a>

        <button aria-expanded="false" aria-controls="menu-list">
            <span class="open">☰</span>
            <span class="close">×</span>
            Menu
      </button>
            
        <ul className="menu__list">
            <li className="menu__list__item">
                <a className="menu__list__link" href="#home">Home</a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#about">Sobre</a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#proposal">Nossa Proposta</a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#team">Equipe</a>
            </li>
            <li className="menu__list__item">
                <a className="menu__list__link" href="#contact">Contato</a>
            </li>
        </ul>
    </nav>
);

export default Menu;
