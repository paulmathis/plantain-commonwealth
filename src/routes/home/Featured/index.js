import React from 'react';
import styled from 'styled-components/macro';
import Product from './Product';
import shirtGreen from '../../../assets/green-t-shirt.jpg';
import shirtGrey from '../../../assets/grey-t-shirt.jpg';
import shirtBlue from '../../../assets/blue-t-shirt.jpg';
import shirtPurple from '../../../assets/purple-t-shirt.jpg';

const Grid = styled.div`
  padding: 40px 0 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-template-rows: auto auto;
  justify-items: center;

  h1 {
    grid-column: span 4;
  }
`;

export default () => (
  <Grid>
    <h1>FEATURED PRODUCTS</h1>
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGrey} name="Grey T-Shirt" price="$19.99" />
    <Product img={shirtBlue} name="Blue T-Shirt" price="$19.99" />
    <Product img={shirtPurple} name="Purple T-Shirt" price="$19.99" />
  </Grid>
);
