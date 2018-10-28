import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container';
import Products from './Products';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 30px;
`;

export default () => (
  <Container>
    <Grid>
      <div>
        <h3>Categories</h3>
        <a href="/">Tees</a>
        <a href="/">Shirts</a>
        <a href="/">Suits</a>
        <a href="/">Pants</a>
        <a href="/">Shorts</a>
      </div>
      <Products />
    </Grid>
  </Container>
);
