import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-template-rows: auto auto;
  justify-items: center;

  h1 {
    grid-column: span 4;
  }
`;

export default () => {
  return (
    <Grid>
      <h1>FEATURED PRODUCTS</h1>
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid>
  );
};
