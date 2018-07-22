import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './assets/style/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
