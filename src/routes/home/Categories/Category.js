import React from 'react';
import styled from 'styled-components';
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
    position: absolute;
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default (props) => {
  return (
    <Category>
      <img src={props.img} />
      <Button>{props.name}</Button>
    </Category>
  );
};
