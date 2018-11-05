import React from 'react';
import styled from 'styled-components/macro';
import Product from '../../../../components/Product';
import Top from './Top';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 30px;
`;

export default ({ products }) => (
  <Grid>
    <Top />
    {products.map(product => (
      <Product img={product.img} name={product.name} price={product.price} />
    ))}
  </Grid>
);
