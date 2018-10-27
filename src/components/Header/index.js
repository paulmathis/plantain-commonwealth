import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import NavItem from './NavItem';
import Logo from './Logo';

const Header = styled.header`
  z-index: 9999;
  position: fixed;
  background-color: white;
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  height: 60px;
  top: 0;

  .logo {
    justify-self: start;
    max-height: 60px;
  }

  .account {
    justify-self: end;
    font-size: 2em;
    position: relative;
    svg {
      margin: 0 5px 0 5px;
      color: ${({ theme }) => theme.lightGrey};
      cursor: pointer;
    }
  }

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
`;

export default () => (
  <Header>
    <Logo />
    <Nav>
      <NavItem to="/">New Arrivals</NavItem>
      <NavItem to="/women">Women</NavItem>
      <NavItem to="/men">Men</NavItem>
      <NavItem to="/shoes">Shoes</NavItem>
      <NavItem to="/accessories">Accessories</NavItem>
      <NavItem to="/sale">Sale</NavItem>
    </Nav>
    <div className="account">
      <FontAwesomeIcon icon="user-circle" />
      <FontAwesomeIcon icon="shopping-bag" />
      <span>2</span>
    </div>
  </Header>
);
