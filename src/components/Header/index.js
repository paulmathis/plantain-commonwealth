import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import NavItem from './NavItem';
import logo from '../../assets/logo.png';

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
    svg {
      margin: 0 5px 0 5px;
      color: ${({ theme }) => theme.lightGrey};
      cursor: pointer;
    }
  }
`;

export default () => {
  return (
    <Header>
      <img className="logo" src={logo} alt="" />
      <Nav>
        <NavItem href="#">New Arrivals</NavItem>
        <NavItem href="#">Women</NavItem>
        <NavItem href="#">Men</NavItem>
        <NavItem href="#">Shoes</NavItem>
        <NavItem href="#">Accessories</NavItem>
        <NavItem href="#">Sale</NavItem>
      </Nav>
      <div className="account">
        <FontAwesomeIcon icon="user-circle" />
        <FontAwesomeIcon icon="shopping-bag" />
      </div>
    </Header>
  );
};
