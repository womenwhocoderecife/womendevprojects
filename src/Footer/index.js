import React from 'react';

import logo from '../assets/images/logo.png';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';
import logoWwcode from '../assets/images/logo-wwcode.png';

import './index.css';

const Footer = () => (
  <footer className="footer">
    <figure className="footer__figure">
      <img
        className="footer__img"
        src={logo}
        alt="logo"
        title="Women Dev Project"
      />
    </figure>

    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#home">Home</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>

    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#about">Sobre</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>


    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#proposal">Nossa Proposta</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>

    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#team">Equipe</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>

    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#projects">Projetos</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>


    <ul className="footer__list">
      <li className="footer__list__item">
        <a className="footer__list__title" href="#contact">Contato</a>
      </li>
      {/* <li className="footer__list__item">
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
      </li> */}
    </ul>

    <div className="footer__list">
      <h3 className="footer__title">
        Mídia Social
      </h3>
      <ul className="footer__list__social-network">
        <li className="footer__list__item__social-network">
          <a href="https://github.com/womenwhocoderecife">
            <figure className="footer__figure">
              <img src={github} alt="logo" title="github" />
            </figure>
          </a>
        </li>
        <li className="footer__list__item__social-network">
          <a href="https://www.instagram.com/wwcoderecife/">
            <figure className="footer__figure">
              <img src={instagram} alt="logo" title="instagram" />
            </figure>
          </a>
        </li>
        <li className="footer__list__item__social-network">
          <a href="https://twitter.com/WWCode_Recife">
            <figure className="footer__figure">
              <img src={twitter} alt="logo" title="twitter" />
            </figure>
          </a>
        </li>
      </ul>
    </div>

    <ul className="footer__list">
      <li className="footer__list__wwcode">
        <h3 className="footer__title">Iniciativa</h3>
      </li>
      <li>
        <a href="https://www.womenwhocode.com/recife">
          <figure className="footer__figure">
            <img
              className="footer__img"
              src={logoWwcode}
              alt="logo WWCode"
              title="logo WWCode"
            />
          </figure>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
