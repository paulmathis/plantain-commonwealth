import React, { Component } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Home from './routes/home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
