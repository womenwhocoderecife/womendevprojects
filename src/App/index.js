import React, { Component } from 'react';

import Header from '../Header';
import Main from '../main/Main';
import Footer from '../Footer';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app" id="home">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
