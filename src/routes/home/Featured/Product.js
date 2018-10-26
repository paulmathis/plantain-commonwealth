import React from 'react';
import styled from 'styled-components';
import Link from '../../../components/Link';

const Product = styled.div`
  & > div {
    position: relative;
    margin-bottom: 20px;
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
    height: 360px;
    object-fit: cover;
  }

  p {
    margin-top: 5px;
    font-size: 1.2em;
  }
`;

export default ({ img, name, price }) => (
  <Product>
    <div>
      <img src={img} alt="" />
      <div />
    </div>
    <div>
      <Link href="/">{name}</Link>
      <p>{price}</p>
    </div>
  </Product>
);
