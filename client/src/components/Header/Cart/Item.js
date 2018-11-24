import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Link from '../../Link';
import shirt from '../../../assets/green-t-shirt.jpg';

function Item() {
  return (
    <Wrapper>
      <img src={shirt} alt="shirt" />
      <div>
        <Link to="/">White Shirt With Pleat Detail Back</Link>
        <p className="price">1 x $19.99</p>
      </div>
    </Wrapper>
  );
}

// Item.propTypes = {};

export default Item;

const Wrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    margin-left: 20px;
    height: 80%;
    a {
      font-size: 16px;
    }
    p {
      font-size: 0.9rem;
      color: #888;
    }
  }
`;
