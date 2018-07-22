import React from 'react';

import about from './assets/images/about.png'

import './assets/style/main.css';

const Main = () => (
  <main className='main'>
    <div className='main__content'>
      <h2 className='main__title'>Sobre</h2>
      <p className='main__text'>Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos nos meetups e grupos de estudos do WWCode. Oportunidade para aquisição de experiência profissional com atuação em projetos reais. Acreditamos que com a criação de um portfólio próprio os profissionais ganham mais visibilidade ,e aumentam sua competitividade no mercado.</p>
    </div>
    <img className='main__img' src={about} alt='' />
  </main>
);

export default Main;