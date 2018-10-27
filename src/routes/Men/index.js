import React from 'react';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import hero from '../../assets/hero-men.jpg';

export default () => (
  <React.Fragment>
    <Hero small src={hero}>
      <h1>Men</h1>
      <h2>New Arrivals Men Collection 2018</h2>
    </Hero>
    <Container>
      <h1>Content</h1>
    </Container>
  </React.Fragment>
);
