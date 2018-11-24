import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import Item from './Item';
import Button from '../../Button';
import { desktop } from '../../../util/mediaQueries';

export default class Cart extends Component {
  componentDidMount() {}

  render() {
    const { open } = this.props;
    return (
      <Wrapper className={open ? 'open' : ''}>
        <Box>
          <div>
            <Item />
            <Item />
            <Item />
          </div>
          <p>Total: $75.00</p>
          <CartButtons>
            <CartButton dark round>
              View Cart
            </CartButton>
            <div /> {/* Spacer */}
            <CartButton dark round>
              Check Out
            </CartButton>
          </CartButtons>
        </Box>
      </Wrapper>
    );
  }
}

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  width: 340px;
  position: absolute;
  top: 100%;
  right: 30px;
  transform: scale(0);
  transform-origin: 100% 0%;
  transition: transform 0.5s;

  &.open {
    transform: scale(1);
  }

  ${desktop(css`
    width: 300px;
    right: 10px;
  `)};
`;

const Box = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-top: 3px solid #e6e6e6;
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;

  & > p {
    text-align: right;
    margin-top: 10px;
    margin-bottom: 25px;
  }
`;

const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;

  /* Spacer */
  div {
    width: 20px;
  }
`;

const CartButton = styled(Button)`
  width: 100%;
  height: 38px;
  font-size: 1rem;
  background-color: #222;
`;
