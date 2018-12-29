import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import axios from 'axios';
import Container from '../../../components/Container';
import Products from './Products';
import Sidebar from './Sidebar';
import { phone } from '../../../util/mediaQueries';
import { fetchJSON } from '../../../util/helpers';

function getCategoryFilter(props, state) {
  const { match } = props;
  const { categories } = state;
  if (state.categories.length <= 0 || !match.params.category) return { categoryFilter: '' };

  const category = categories.find(
    cat => cat.name.toUpperCase() === match.params.category.toUpperCase()
  );

  return { categoryFilter: category._id };
}

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      range: [0, 200],
      categories: [],
      categoryFilter: '',
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  componentDidMount() {
    // Get list of categories available
    const { group } = this.props;
    axios(`/api/category_groups/${group}?populate=true`).then(res => {
      const { categories } = res.data;
      this.setState({ categories });
      this.updateProducts();
    });
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.category !== prevProps.match.params.category) {
      this.updateProducts();
    }
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

  static getDerivedStateFromProps(props, state) {
    return getCategoryFilter(props, state);
  }

  async updateProducts() {
    const { range, categoryFilter } = this.state;
    const { group } = this.props;

    try {
      const products = await fetchJSON(
        `/api/products?range=[${range}]&category=${categoryFilter}&group=${group}`
      );
      this.setState({ products });
    } catch (e) {
      this.setState({ products: [] });
    }
  }

  render() {
    const { products, categories } = this.state;
    const { groupName } = this.props;
    return (
      <Container>
        <Grid>
          <Sidebar
            groupName={groupName}
            getCategoryFilter={this.getCategoryFilter}
            categories={categories}
            onSliderChange={this.onSliderChange}
          />
          <Products products={products} />
        </Grid>
      </Container>
    );
  }
}

Store.propTypes = {
  group: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) minmax(auto, 7fr);
  grid-gap: 30px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;
