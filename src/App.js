import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Men from './routes/Men';
import Footer from './components/Footer';

const theme = {
  orange: '#e65540',
  black: '#333',
  darkBlack: '#222',
  grey: '#555',
  lightGrey: '#666',
  extraLightGrey: '#888',
  brandPrimary: '#e65540',
};

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Footer />
      </React.Fragment>
    </Router>
  </ThemeProvider>
);
