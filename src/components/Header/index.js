import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import NavItem from './NavItem';

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

  .logo {
    justify-self: start;
  }

  .account {
    justify-self: end;
    font-size: 2em;
    svg {
      margin: 0 5px 0 5px;
    }
  }
`;

export default () => {
  return (
    <Header>
      <h1 className="logo">Plantain Commonwealth</h1>
      <Nav>
        <NavItem>New Arrivals</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Shoes</NavItem>
        <NavItem>Accessories</NavItem>
        <NavItem>Sale</NavItem>
      </Nav>
      <div className="account">
        <FontAwesomeIcon icon="user-circle" />
        <FontAwesomeIcon icon="shopping-bag" />
      </div>
    </Header>
  );
};
