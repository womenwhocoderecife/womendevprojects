import React, {Component} from 'react';

import About from './About';
import Proposal from './Proposal';
import Team from './Team';
import Statistic from './Statistic';

import '../assets/style/main/main.css';

class Main extends Component{

  render(){
      return (
        <main className="main">
          <About />
          <Proposal />
          <Team />
          <Statistic/>
        </main>
        )
    }

  }

  export default Main;
