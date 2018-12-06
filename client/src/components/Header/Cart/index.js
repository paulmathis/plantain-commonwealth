import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { connect } from 'react-redux';
import Item from './Item';
import Button from '../../Button';
import { desktop } from '../../../util/mediaQueries';

const mapStateToProps = state => ({
  items: state.cart.items,
  total: state.cart.total,
});

class Cart extends Component {
  componentDidMount() {}

  render() {
    const { total, items, open } = this.props;
    return (
      <Wrapper className={open ? 'open' : ''}>
        <Box>
          <div>
            {items.map(item => (
              <Item key={item.id} {...item} />
            ))}
          </div>
          <p>Total: ${total.toFixed(2)}</p>
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

export default connect(mapStateToProps)(Cart);

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
