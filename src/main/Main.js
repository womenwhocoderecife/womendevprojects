import React, { Component } from 'react';

import About from './About';
import Contact from './Contact';
import Proposal from './Proposal';
import Team from './Team';

import '../assets/style/main/main.css';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <About />
        <Proposal />
        <Team />
        <Contact />
      </main>
    );
  }
}

export default Main;
