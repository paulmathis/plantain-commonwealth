import React from 'react';
import Hero from '../../components/Hero';
import hero from '../../assets/hero-men.jpg';
import Store from './Store';

export default () => (
  <React.Fragment>
    <Hero small src={hero}>
      <h1>Men</h1>
      <h2>New Arrivals Men Collection 2018</h2>
    </Hero>
    <Store />
  </React.Fragment>
);
