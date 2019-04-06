import React, { Component } from 'react';

import '../assets/style/main/main.css';

import About from './About';
import Contact from './Contact';
import Proposal from './Proposal';
import Projects from './Projects';
import Team from './Team';
import Statistic from './Statistic';
import Skills from './Skills';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <About />
        <Proposal />
        <Projects />
        <Team />
        <Skills />
        <Statistic  />
        <Contact />
        
      </main>
    );
  }
}

export default Main;
