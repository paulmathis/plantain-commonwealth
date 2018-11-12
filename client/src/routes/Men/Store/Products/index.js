import React from 'react';
import styled from 'styled-components/macro';
import Product from '../../../../components/Product';
import Top from './Top';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 30px;
  align-content: start;

  .message {
    grid-column: 1/-1;
    justify-self: center;
  }
`;

export default ({ products }) => (
  <Grid>
    <Top />
    {products.length === 0 && <h1 className="message">No results found.</h1>}
    {products.map(product => (
      <Product image={product.image} name={product.name} price={product.price} key={product._id} />
    ))}
  </Grid>
);
