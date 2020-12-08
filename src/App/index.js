import React from 'react';

import Theme from "../Theme";

import { Container } from './styles';
import { GlobalStyle } from '../assets/style/GlobalStyle';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Proposal from '../sections/Proposal';
import Projects from '../sections/Projects';
import Team from '../sections/Team';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <About />
        <Proposal />
        <Projects />
        <Team />
        {/*<Main />
        <Footer /> */}
      </Container>
    </Theme>
  );
}

export default App;
