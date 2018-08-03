import React, { Component } from 'react';

import '../assets/style/main/main.css';

import About from './About';
import Contact from './Contact';
import Proposal from './Proposal';
import Team from './Team';
import Statistic from './Statistic';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <About />
        <Proposal />
        <Team />
        <Statistic  />
        <Contact />
        
      </main>
    );
  }
}

export default Main;
