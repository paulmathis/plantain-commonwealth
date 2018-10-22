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

export default (props) => {
  return (
    <Product>
      <div>
        <img src={props.img} alt="" />
        <div />
      </div>
      <div>
        <Link href="#">{props.name}</Link>
        <p>{props.price}</p>
      </div>
    </Product>
  );
};
