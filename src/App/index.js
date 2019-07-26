import React from 'react';

import Header from '../Header';
import Main from '../main/Main';
import Footer from '../Footer';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
