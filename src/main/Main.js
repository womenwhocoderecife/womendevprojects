import React from 'react';

import About from './About';
import Proposal from './Proposal';

import karina_perfil from '../assets/images/karina_perfil.jpg';
import simone from '../assets/images/simone.jpg';
import andreza from '../assets/images/andreza.jpg';
import will from '../assets/images/willany.jpg';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

import '../assets/style/main/main.css';
import '../assets/style/main/team.css';

const Main = () => (
  <main className="main">
    <About />
    <Proposal />

    <section className="team">
      <h2 className="main__title team__title">Equipe</h2>
      <ul className="team__content">
        <li className="team__card">
          <img
            className="team__card__img"
            src={karina_perfil}
            alt="Karina"
          />
          <h3 className="team__card__title">Karina Machado</h3>
          <p className="team__card__text">Front-End Developer</p>
          <p className="team__card__text">WWcode Director, Recife.</p>

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
        </li>

        <li className="team__card">
          <img
            className="team__card__img"
            src={andreza}
            alt="Andreza"
          />
          <h3 className="team__card__title">Andreza Leite</h3>
          <p className="team__card__text">Docente UFRPE</p>
          <p className="team__card__text">WWcode Director, Recife.</p>

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
        </li>

        <li className="team__card">
          <img
            className="team__card__img"
            src={simone}
            alt="Simone"
          />
          <h3 className="team__card__title">Simone Amorim</h3>
          <p className="team__card__text">Developer ThoughtWorks</p>
          <p className="team__card__text">WWcode Lead, Recife.</p>

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
        </li>

        <li className="team__card">
          <img className="team__card__img" src={will} alt="Willany" />
          <h3 className="team__card__title">Willany Silva</h3>
          <p className="team__card__text">Developer ThoughtWorks</p>
          <p className="team__card__text">WWcode Lead, Recife.</p>

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
        </li>
      </ul>
    </section>
  </main>
);

export default Main;
