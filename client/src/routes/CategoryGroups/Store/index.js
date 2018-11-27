import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import axios from 'axios';
import Container from '../../../components/Container';
import Products from './Products';
import Sidebar from './Sidebar';
import { phone } from '../../../util/mediaQueries';
import { fetchJSON } from '../../../util/helpers';

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      range: [0, 200],
      categories: [],
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  componentDidMount() {
    this.updateProducts();

    // Get list of categories available
    const { group } = this.props;
    axios(`/api/category_groups/${group}?populate=true`).then(res => {
      const { categories } = res.data;
      this.setState({ categories });
    });
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
    const { group } = this.props;
    try {
      const products = await fetchJSON(`/api/products?range=[${range}]&group=${group}`);
      this.setState({ products });
    } catch (e) {
      this.setState({ products: [] });
    }
  }

  render() {
    const { products, categories } = this.state;
    return (
      <Container>
        <Grid>
          <Sidebar categories={categories} onSliderChange={this.onSliderChange} />
          <Products products={products} />
        </Grid>
      </Container>
    );
  }
}

Store.propTypes = {
  group: PropTypes.string.isRequired,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) minmax(auto, 7fr);
  grid-gap: 30px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;
