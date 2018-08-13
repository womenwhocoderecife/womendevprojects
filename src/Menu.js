import React from 'react';

import './assets/style/menu.css';

const Menu = () => (
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
);

export default Menu;
