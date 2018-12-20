import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../../Link';
import { removeCartItem } from '../../../actions';

const mapDispatchToProps = dispatch => ({
  removeItem: item => {
    dispatch(removeCartItem(item));
  },
});
function Item({ item, removeItem }) {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={item.image} alt="shirt" />
        <div>
          {' '}
          <FontAwesomeIcon onClick={() => removeItem(item)} icon="times" />
        </div>
      </ImageContainer>
      <Details>
        <Link to="/">{item.name}</Link>
        <p className="price">
          {item.ammount} x ${item.price}
        </p>
      </Details>
    </Wrapper>
  );
}

Item.propTypes = {
  item: PropTypes.shape.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(Item);

const Wrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    transition: all 0.2s;
    background-color: #0000007d;
    opacity: 0;
    svg {
      color: #e0e0e0;
      font-size: 1rem;
    }
  }
  &:hover div {
    opacity: 1;
  }
`;

const Details = styled.div`
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
`;
