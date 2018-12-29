import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

function Category({ img, name, to }) {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <Link to={to}>
        <Button>{name}</Button>
      </Link>
    </Wrapper>
  );
}

Category.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Category;

const Wrapper = styled.div`
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
