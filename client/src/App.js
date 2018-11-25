import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';
import Admin from './routes/Admin';
import { Men, Women, Shoes, Accessories } from './routes/CategoryGroups';
import theme from './util/theme';

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div className="app-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/admin" component={Admin} />
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);
