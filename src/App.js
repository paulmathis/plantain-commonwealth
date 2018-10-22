import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './routes/home';
import Footer from './components/Footer';
import Button from './components/Button';

const theme = {
  orange: '#e65540',
  black: '#333',
  darkBlack: '#222',
  grey: '#555',
  lightGrey: '#666',
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Hero>
            <h2>Women Collection 2018</h2>
            <h1>NEW ARRIVALS</h1>
            <Button round>Shop Now</Button>
          </Hero>
          <Home />
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
