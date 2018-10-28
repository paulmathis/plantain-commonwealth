import React from 'react';
import styled from 'styled-components/macro';
import Link from './Link';
import Button from './Button';

const Product = styled.div`
  .img-container {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    & > div {
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
  }

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
    /* transform: translateY(-80px); */
  }
`;

export default ({ img, name, price }) => (
  <Product>
    <div className="img-container">
      <img src={img} alt="" />
      <div />
      <Button round dark>
        Add to Cart
      </Button>
    </div>
    <div>
      <Link href="/">{name}</Link>
      <p>{price}</p>
    </div>
  </Product>
);
