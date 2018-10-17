import React, { Component } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Container />
      </React.Fragment>
    );
  }
}

export default App;
