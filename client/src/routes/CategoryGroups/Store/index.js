import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
import Container from '../../../components/Container';
import Products from './Products';

import Sidebar from './Sidebar';
import { phone } from '../../../util/mediaQueries';
import { fetchJSON } from '../../../util/helpers';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) minmax(auto, 7fr);
  grid-gap: 30px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      range: [0, 200],
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  componentDidMount() {
    this.updateProducts();
  }

  onSliderChange(value) {
    this.setState(
      {
        range: value,
      },
      () => {
        this.updateProducts();
      }
    );
  }

  async updateProducts() {
    const { range } = this.state;
    try {
      const products = await fetchJSON(`/api/products?range=[${range}]`);
      this.setState({ products });
    } catch (e) {
      this.setState({ products: [] });
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Grid>
          <Sidebar onSliderChange={this.onSliderChange} />
          <Products products={products} />
        </Grid>
      </Container>
    );
  }
}
