import React from 'react';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

const Category = styled.div`
  overflow: hidden;
  position: relative;

  &:hover > img {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default ({ img, name }) => (
  <Category>
    <img src={img} alt={name} />
    <Button>{name}</Button>
  </Category>
);
