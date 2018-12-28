import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../../util/history';
import Nav from './Nav';
import NavItem from './NavItem';
import Logo from './Logo';
import { desktop } from '../../util/mediaQueries';
import Hambuger from './Hambuger';
import Cart from './Cart';

const mapStateToProps = state => {
  let itemTotal = 0;
  state.cart.items.forEach(item => {
    itemTotal += item.ammount;
  });
  return { itemTotal };
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
      cartOpen: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  // Setup history listener and close open tabs on page change
  componentDidMount() {
    const unlisten = history.listen(() => {
      this.setState({ navOpen: false, cartOpen: false });
    });
    this.setState({ unlisten });
  }

  // Cleanup history listener
  componentWillUnmount() {
    const { unlisten } = this.state;
    unlisten();
  }

  // Handles navbar hambguer menu toggle
  handleToggle() {
    this.setState(state => ({
      navOpen: !state.navOpen,
      cartOpen: false,
    }));
  }

  // Handles shopping cart toggle
  handleCart() {
    this.setState(state => ({
      cartOpen: !state.cartOpen,
      navOpen: false,
    }));
  }

  render() {
    const { navOpen, cartOpen } = this.state;
    const { itemTotal } = this.props;
    return (
      <Wrapper>
        <Logo />
        <Nav open={navOpen}>
          <NavItem to="/">New Arrivals</NavItem>
          <NavItem to="/women">Women</NavItem>
          <NavItem to="/men">Men</NavItem>
          <NavItem to="/shoes">Shoes</NavItem>
          <NavItem to="/accessories">Accessories</NavItem>
          {/* <NavItem to="/sale">Sale</NavItem> */}
        </Nav>
        <Accounts>
          <FontAwesomeIcon icon="user-circle" />
          <Shopping>
            <FontAwesomeIcon onClick={this.handleCart} icon="shopping-bag" />
            <span>{itemTotal}</span>
          </Shopping>
          <Hambuger active={navOpen} onClick={this.handleToggle} />
          <Cart open={cartOpen} />
        </Accounts>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  itemTotal: PropTypes.number.isRequired,
};

const Wrapper = styled.header`
  z-index: 9999;
  position: fixed;
  background-color: white;
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 700px) 1fr;
  grid-gap: 50px;
  align-items: center;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  min-height: 60px;
  top: 0;

  span {
    height: 17px;
    width: 17px;
    background-color: #333;
    border-radius: 50%;
    display: inline-block;
    font-size: 0.3em;
    position: absolute;
    right: 0;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  ${desktop(css`
    padding: 0;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    position: absolute;
    grid-gap: 0;
  `)};
`;

const Accounts = styled.div`
  justify-self: end;
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 2rem;
    margin: 0 5px 0 5px;
    color: ${({ theme }) => theme.lightGrey};
    cursor: pointer;
    height: 36px;
  }

  ${desktop(css`
    padding-right: 20px;
  `)};
`;

const Shopping = styled.div`
  position: relative;
  font-size: 2rem;
`;
