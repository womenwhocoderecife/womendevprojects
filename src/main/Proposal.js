import React from 'react';

import group from '../assets/icons/group.svg';
import rocket from '../assets/icons/rocket.svg';
import tag from '../assets/icons/tag.svg';

import '../assets/style/main/proposal.css';

const Proposal = () => (
  <section className="proposal" id="proposal">
    <h2 className="main__title proposal__title">Nossa Proposta</h2>
    <div className="proposal__content ">
      <div className="proposal__card qualify">
        <figure className="proposal__card__figure">
          <img
            className="proposal__card__img"
            src={group}
            alt="Group"
          />
          <h3 className="proposal__card__title">Qualificar</h3>
        </figure>
        <p className="proposal__card__text">
        Protagonização em <br></br>treinamentos e Meetups do WWcode
        </p>
      </div>

      <div className="proposal__card engage">
        <figure className="proposal__card__figure">
          <img
            className="proposal__card__img"
            src={rocket}
            alt="Rocket"
          />
          <h3 className="proposal__card__title">
            Desenvolver o espírito empreendedor
          </h3>
        </figure>
        <p className="proposal__card__text">
        Desenvolvimento de liderança<br></br> técnica e gerenciamento de projetos.<br></br>

        Análise de negócios, lucro nos<br></br> serviços prestados. %$ doado<br></br> para a comunidade será<br></br> revertido em cursos, livros,<br></br> coffeebreak, conferências, etc..
        </p>
      </div>

      <div className="proposal__card projects">
        <figure className="proposal__card__figure">
          <img
            className="proposal__card__img"
            src={tag}
            alt="Tag HTML"
          />
          <h3 className="proposal__card__title">
            Desenvolver Projetos
          </h3>
        </figure>
        <p className="proposal__card__text">
          Desenvolvimento Web<br></br>
          App Mobile<br></br>
          Diversas Tecnologias
        </p>
      </div>
    </div>
  </section>
);

export default Proposal;
