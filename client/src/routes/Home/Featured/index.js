import React from 'react';
import styled from 'styled-components/macro';
import Product from '../../../components/Product';
import shirtGreen from '../../../assets/green-t-shirt.jpg';
import shirtGrey from '../../../assets/grey-t-shirt.jpg';
import shirtBlue from '../../../assets/blue-t-shirt.jpg';
import shirtPurple from '../../../assets/purple-t-shirt.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 270px));
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  overflow: hidden;

  h1 {
    grid-column: 1/-1;
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
