import React from 'react';

import about from './assets/images/about.png';
import group from './assets/icons/group.svg';
import rocket from './assets/icons/rocket.svg';
import tag from './assets/icons/tag.svg';
import karina_perfil from './assets/images/karina_perfil.jpg';
import simone from './assets/images/simone.jpg';
import andreza from './assets/images/andreza.jpg';
import will from './assets/images/willany.jpg';
import github from './assets/icons/github.svg';
import instagram from './assets/icons/instagram.svg';
import twitter from './assets/icons/twitter.svg';

import './assets/style/main/main.css';
import './assets/style/main/about.css';
import './assets/style/main/proposal.css';
import './assets/style/main/team.css';

const Main = () => (
  <main className="main">
    <section className="about">
      <div className="about__content">
        <h2 className="main__title about__title">Sobre</h2>
        <p className="about__text">
          Uma iniciativa do Women Who Code Recife que tem o objetivo
          de desenvolver projetos pro-bonos e comerciais para colocar
          em prática os conhecimentos adquiridos nos meetups e grupos
          de estudos do WWCode. Oportunidade para aquisição de
          experiência profissional com atuação em projetos reais.
          Acreditamos que com a criação de um portfólio próprio os
          profissionais ganham mais visibilidade ,e aumentam sua
          competitividade no mercado.
        </p>
      </div>
      <img className="about__img" src={about} alt="" />
    </section>

    <section className="proposal">
      <h2 className="main__title proposal__title">Nossa Proposta</h2>
      <div className="proposal__content">
        <div className="proposal__card">
          <img
            className="proposal__card__img"
            src={group}
            alt="Group"
          />
          <h3 className="proposal__card__title">Qualificar</h3>
          <p className="proposal__card__text">
            Uma iniciativa do Women Who Code Recife que tem o objetivo
            de desenvolver projetos pro-bonos e comerciais para
            colocar em prática os conhecimentos adquiridos nos meetups
            e grupos de estudos do WWCode. Oportunidade para aquisição
            de experiência profissional com atuação em projetos reais.
            Acreditamos que com a criação de um portfólio próprio os
            profissionais ganham mais visibilidade ,e aumentam sua
            competitividade no mercado.
          </p>
        </div>

        <div className="proposal__card proposal__card__middle">
          <img
            className="proposal__card__img"
            src={rocket}
            alt="Rocket"
          />
          <h3 className="proposal__card__title">
            Desenvolver o espírito empreendedor
          </h3>
          <p className="proposal__card__text">
            Uma iniciativa do Women Who Code Recife que tem o objetivo
            de desenvolver projetos pro-bonos e comerciais para
            colocar em prática os conhecimentos adquiridos nos meetups
            e grupos de estudos do WWCode. Oportunidade para aquisição
            de experiência profissional com atuação em projetos reais.
            Acreditamos que com a criação de um portfólio próprio os
            profissionais ganham mais visibilidade ,e aumentam sua
            competitividade no mercado.
          </p>
        </div>

        <div className="proposal__card">
          <img
            className="proposal__card__img"
            src={tag}
            alt="Tag HTML"
          />
          <h3 className="proposal__card__title">
            Desenvolver Projetos
          </h3>
          <p className="proposal__card__text">
            Uma iniciativa do Women Who Code Recife que tem o objetivo
            de desenvolver projetos pro-bonos e comerciais para
            colocar em prática os conhecimentos adquiridos nos meetups
            e grupos de estudos do WWCode. Oportunidade para aquisição
            de experiência profissional com atuação em projetos reais.
            Acreditamos que com a criação de um portfólio próprio os
            profissionais ganham mais visibilidade ,e aumentam sua
            competitividade no mercado.
          </p>
        </div>
      </div>
    </section>

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
