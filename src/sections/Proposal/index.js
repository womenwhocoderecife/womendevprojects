import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import group from '../../assets/icons/group.svg';
import rocket from '../../assets/icons/rocket.svg';
import tag from '../../assets/icons/tag.svg';

import { Container, Content, Item, Figure, Subtitle, Text } from './styles.js'

const Proposal = () => (
  <Container id="proposal">
      <SectionTitle title="Nossa Proposta" align="center" />
      <Content>
        <Item>
            <Figure>
                <img
                    src={group}
                    alt="Group"
                />
                <Subtitle>Qualificar</Subtitle>
            </Figure>
            <Text>
            Protagonização em <br></br>treinamentos e Meetups do WWcode
            </Text>
        </Item>

      <Item>
        <Figure>
          <img
            src={rocket}
            alt="Rocket"
          />
          <Subtitle>
            Espírito empreendedor
          </Subtitle>
        </Figure>
        <Text>
        Desenvolvimento de liderança<br></br> técnica e gerenciamento de projetos.<br></br>
        Análise de negócios, lucro nos serviços prestados.<br></br> $ doado para a comunidade
        será revertido em cursos, livros, coffeebreak, conferências, etc..
        </Text>
      </Item>

      <Item>
        <Figure>
          <img
            src={tag}
            alt="Tag HTML"
          />
          <Subtitle>
            Desenvolver Projetos
          </Subtitle>
        </Figure>
        <Text>
          Desenvolvimento Web<br></br>
          App Mobile<br></br>
          Diversas Tecnologias
        </Text>
      </Item>
      </Content>
  </Container>
);

export default Proposal;
