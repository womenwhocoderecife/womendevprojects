import React from 'react';

// import about from '../assets/images/hands.png';
import about from '../assets/images/about2.jpg';
import '../assets/style/main/about.css';
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

const About = () => (
  <section className="about" id="about">
    <div className="about__content animated fadeIn">
    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
      <h2 className="main__title about__title">WomenDev Projects</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <p className="about__text">
          Uma iniciativa do Women Who Code Recife que tem o objetivo de
          desenvolver projetos pro-bonos e comerciais para colocar em
          prática os conhecimentos adquiridos nos meetups e grupos de
          estudos do WWCode. Oportunidade para aquisição de experiência
          profissional com atuação em projetos reais. Acreditamos que
          com a criação de um portfólio próprio os profissionais ganham
          mais visibilidade ,e aumentam sua competitividade no mercado.
        </p>
      </ScrollAnimation>
    </div>
    <figure className="about__figure">
    <ScrollAnimation animateIn="fadeIn">
      <img className="about__img" src={about} alt="" />
      </ScrollAnimation>
    </figure>
  </section>
);

export default About;
