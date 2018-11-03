import React from 'react';
import styled from 'styled-components/macro';
import Product from '../../../../components/Product';
import shirtGreen from '../../../../assets/green-t-shirt.jpg';
import Top from './Top';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 30px;
`;

export default () => (
  <Grid>
    <Top />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
    <Product img={shirtGreen} name="Green T-Shirt" price="$19.99" />
  </Grid>
);
