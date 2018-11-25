import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Router, Route } from 'react-router-dom';
import history from './util/history';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';
import Admin from './routes/Admin';
import { Men, Women, Shoes, Accessories } from './routes/CategoryGroups';
import theme from './util/theme';

// TODO: Make a real 404 page
const fourOhFour = () => <h1 style={{ marginTop: '300px' }}>404!</h1>;

export default () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <div className="app-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/admin" component={Admin} />
        <Route component={fourOhFour} />
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);
