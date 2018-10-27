import React from 'react';
import styled from 'styled-components';
import Product from '../../components/Product';
import shirtGreen from '../../assets/green-t-shirt.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  .top {
    grid-column: span 3;
  }
`;

export default () => (
  <Grid>
    <div className="top">
      <select name="" id="" />
      <p>Showing 12 of 100</p>
    </div>
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
