import React, { Component } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Home from './routes/home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
