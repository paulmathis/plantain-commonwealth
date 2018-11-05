import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
import Container from '../../../components/Container';
import Products from './Products';

import Sidebar from './Sidebar';
import { phone } from '../../../util/mediaQueries';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) minmax(auto, 7fr);
  grid-gap: 30px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;

async function fetchJSON(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await fetchJSON('/api/products');
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Grid>
          <Sidebar />
          <Products products={products} />
        </Grid>
      </Container>
    );
  }
}
