import React from 'react';
import styled from 'styled-components';
import shirt from '../../../assets/shirt.jpg';

const Category = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    position: absolute;
  }

  img:hover {
    transform: scale(1.05);
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: #333;
    border: none;
    width: 179px;
    height: 46px;
    font-size: 1.5em;
    font-weight: 100;
    box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    color: white;
    background-color: orange;
  }
`;

export default () => {
  return (
    <Category>
      <img src={shirt} />
      <button>Shirts</button>
    </Category>
  );
};
