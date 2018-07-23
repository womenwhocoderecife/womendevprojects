import React from 'react';

import about from './assets/images/about.png'
import group from './assets/icons/group.svg'
import rocket from './assets/icons/rocket.svg'
import tag from './assets/icons/tag.svg'

import './assets/style/main/main.css';
import './assets/style/main/about.css';
import './assets/style/main/proposal.css';

const Main = () => (
  <main className='main'>
    <section className='about'>
      <div className='about__content'>
        <h2 className='main__title about__title'>Sobre</h2>
        <p className='about__text'>Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos nos meetups e grupos de estudos do WWCode. Oportunidade para aquisição de experiência profissional com atuação em projetos reais. Acreditamos que com a criação de um portfólio próprio os profissionais ganham mais visibilidade ,e aumentam sua competitividade no mercado.</p>
      </div>
      <img className='about__img' src={about} alt='' />
    </section>

    <section className='proposal'>
      <h2 className='main__title proposal__title'>Nossa Proposta</h2>
      <div className='proposal__content'>
        <div className='proposal__card'>
          <img className='proposal__card__img' src={group} alt='Group' />
          <h3 className='proposal__card__title'>Qualificar</h3>
          <p className='proposal__card__text'>Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos nos meetups e grupos de estudos do WWCode. Oportunidade para aquisição de experiência profissional com atuação em projetos reais. Acreditamos que com a criação de um portfólio próprio os profissionais ganham mais visibilidade ,e aumentam sua competitividade no mercado.</p>
        </div>

        <div className='proposal__card proposal__card__middle'>
          <img className='proposal__card__img' src={rocket} alt='Rocket' />
          <h3 className='proposal__card__title'>Desenvolver o espírito empreendedor</h3>
          <p className='proposal__card__text'>Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos nos meetups e grupos de estudos do WWCode. Oportunidade para aquisição de experiência profissional com atuação em projetos reais. Acreditamos que com a criação de um portfólio próprio os profissionais ganham mais visibilidade ,e aumentam sua competitividade no mercado.</p>
        </div>

        <div className='proposal__card'>
          <img className='proposal__card__img' src={tag} alt='Tag HTML' />
          <h3 className='proposal__card__title'>Desenvolver Projetos</h3>
          <p className='proposal__card__text'>Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos nos meetups e grupos de estudos do WWCode. Oportunidade para aquisição de experiência profissional com atuação em projetos reais. Acreditamos que com a criação de um portfólio próprio os profissionais ganham mais visibilidade ,e aumentam sua competitividade no mercado.</p>
        </div>
        
      </div>
    </section>
  </main>
);

export default Main;