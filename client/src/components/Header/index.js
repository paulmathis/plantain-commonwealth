import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import NavItem from './NavItem';
import Logo from './Logo';
import { desktop } from '../../util/mediaQueries';
import Hambuger from './Hambuger';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  }

  render() {
    const { navOpen } = this.state;
    return (
      <Header>
        <Logo />
        <Nav open={navOpen}>
          <NavItem to="/">New Arrivals</NavItem>
          <NavItem to="/women">Women</NavItem>
          <NavItem to="/men">Men</NavItem>
          <NavItem to="/shoes">Shoes</NavItem>
          <NavItem to="/accessories">Accessories</NavItem>
          <NavItem to="/sale">Sale</NavItem>
        </Nav>
        <Accounts>
          <FontAwesomeIcon icon="user-circle" />
          <Shopping>
            <FontAwesomeIcon icon="shopping-bag" />
            <span>2</span>
          </Shopping>
          <Hambuger active={navOpen} onClick={this.handleToggle} />
        </Accounts>
      </Header>
    );
  }
}

const Header = styled.header`
  z-index: 9999;
  position: fixed;
  background-color: white;
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
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
  `)};
`;

const Accounts = styled.div`
  justify-self: end;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  svg {
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
`;
