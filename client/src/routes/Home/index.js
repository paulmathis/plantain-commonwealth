import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Categories from './Categories';
import Featured from './Featured';
import hero from '../../assets/heroes/hero-home.jpg';

export default () => (
  <React.Fragment>
    <Hero src={hero}>
      <h2>Women Collection 2018</h2>
      <h1>NEW ARRIVALS</h1>
      <Link to="/women">
        <Button round>Shop Now</Button>
      </Link>
    </Hero>
    <Container>
      <Categories />
      <Featured />
    </Container>
  </React.Fragment>
);
