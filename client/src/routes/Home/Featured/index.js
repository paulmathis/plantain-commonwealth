import React, { Component } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import Product from '../../../components/Product';

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // Get 4 random products to display
    const res = await axios('/api/products?random=4');
    this.setState({ products: res.data });
  }

  render() {
    const { products } = this.state;
    return (
      <Grid>
        <h1>FEATURED PRODUCTS</h1>
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </Grid>
    );
  }
}

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
