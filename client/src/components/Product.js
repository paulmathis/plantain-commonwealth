import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from './Link';
import Button from './Button';
import { addCartItem } from '../actions';

const mapDispatchToProps = dispatch => ({ addToCart: product => dispatch(addCartItem(product)) });

const Product = ({ product, addToCart }) => (
  <Wrapper>
    <ImmageContainer>
      <img src={product.image} alt="" />
      <div />
      <Button
        onClick={() => {
          addToCart(product);
        }}
        round
        dark
      >
        Add to Cart
      </Button>
    </ImmageContainer>
    <div>
      <Link to="/">{product.name}</Link>
      <p>${product.price}</p>
    </div>
  </Wrapper>
);

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(Product);

const ImmageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;

  div {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
  }

  :hover > div {
    opacity: 0.3;
  }

  :hover > button {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  img {
    width: 100%;
  }

  p {
    margin-top: 5px;
    font-size: 1.2em;
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 80px);
    opacity: 0;
  }
`;
