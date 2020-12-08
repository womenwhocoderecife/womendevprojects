import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import team from '../../assets/images/team.jpg';

import { Container, Content, Figure } from './styles'

const About = () => (
  <Container id="about">
    <Content>
      <SectionTitle title="Women Dev Projects" />

      <p>
        Uma iniciativa do <a href="https://www.womenwhocode.com/recife" target="_blank" rel="noopener noreferrer">Women Who Code Recife</a> que tem o objetivo de
        desenvolver projetos pro-bonos e comerciais para colocar em
        prática os conhecimentos adquiridos nos meetups e grupos de
        estudos do WWCode. <br />Oportunidade para aquisição de experiência
        profissional com atuação em projetos reais. Acreditamos que
        com a criação de um portfólio próprio os profissionais ganham
        mais visibilidade ,e aumentam sua competitividade no mercado.
      </p>
    </Content>

    <Figure>
      <img src={team} alt="Women Hands together" />
    </Figure>

  </Container>
);

export default About;
