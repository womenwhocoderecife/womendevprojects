import React from 'react';

import logo from './assets/images/logo.png';
import github from './assets/icons/github.svg';
import instagram from './assets/icons/instagram.svg';
import twitter from './assets/icons/twitter.svg';
import logoWwcode from './assets/images/logo-wwcode.png';

import './assets/style/footer.css';

const Footer = () => (
  <footer className="footer">
    <img className="footer__img" src={logo} alt="logo" />

    <ul className="footer__list">
      <li className="footer__list__item">
        <h3 className="footer__list__title">Sobre</h3>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          O que é
        </a>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          Como Participar
        </a>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          FAQ
        </a>
      </li>
    </ul>

    <ul className="footer__list">
      <li className="footer__list__item">
        <h3 className="footer__list__title">Projetos</h3>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          Pro-Bonos
        </a>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          Comerciais
        </a>
      </li>
      <li className="footer__list__item">
        <a className="footer__list__link" href="">
          Clientes
        </a>
      </li>
    </ul>

    <div className="footer__list">
      <h3 className="footer__list__title footer__title">
        Mídia Social
      </h3>
      <ul className="footer__list__social-network">
        <li className="footer__list__item__social-network">
          <a href="https://github.com/womenwhocoderecife">
            <img src={github} alt="logo" />
          </a>
        </li>
        <li className="footer__list__item__social-network">
          <a href="https://www.instagram.com/wwcoderecife/">
            <img src={instagram} alt="logo" />
          </a>
        </li>
        <li className="footer__list__item__social-network">
          <a href="https://twitter.com/WWCode_Recife">
            <img src={twitter} alt="logo" />
          </a>
        </li>
      </ul>
    </div>

    <ul className="footer__list">
      <li className="footer__list__wwcode">
        <h3 className="footer__list__title">Iniciativa</h3>
      </li>
      <li>
        <a href="https://www.womenwhocode.com/recife">
          <img
            className="footer__img"
            src={logoWwcode}
            alt="logo WWCode"
          />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
