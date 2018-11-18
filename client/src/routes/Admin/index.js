import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import CategoryGroupForm from './CategoryGroupForm';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero xsmall>
          <h1>Admin</h1>
        </Hero>
        <Container>
          <Grid>
            <CategoryGroupForm update={this.forceUpdate} />
            <CategoryForm update={this.forceUpdate} />
            <ProductForm update={this.forceUpdate} />
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
