import React from 'react';
import styled from 'styled-components';
import shirt from '../../../assets/shirt.jpg';

const Product = styled.div`
  & > div {
    position: relative;
    & > div {
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      /* background-color: rgba(0, 0, 0, 0.5); */
      height: 100%;
      width: 100%;
      opacity: 0;
    }
    & > div:hover {
      opacity: 0.3;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default () => {
  return (
    <Product>
      <div>
        <img src={shirt} alt="" />
        <div />
      </div>
      <div>
        <p>Shirt</p>
        <p>$20.00</p>
      </div>
    </Product>
  );
};
