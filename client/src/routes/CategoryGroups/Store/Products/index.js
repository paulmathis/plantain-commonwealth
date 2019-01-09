import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Product from '../../../../components/Product';
import Top from './Top';

function Products({ products }) {
  return (
    <Grid>
      <Top total={products.length} />
      {products.length === 0 && <h1 className="message">No results found.</h1>}
      {products.map(product => (
        <Product product={product} key={product._id} />
      ))}
    </Grid>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Products;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 30px;
  align-content: start;

  .message {
    grid-column: 1/-1;
    justify-self: center;
  }
`;
