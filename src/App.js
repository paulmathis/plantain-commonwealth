import React, { Component } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Hero />
      </Container>
    );
  }
}

export default App;
