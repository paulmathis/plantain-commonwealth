import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NavItem from './NavItem';

const Header = styled.header`
  text-align: center;
`;

export default () => {
  return (
    <Header>
      <h1>Plantain Commonwealth</h1>
      <Nav>
        <NavItem>New Arrivals</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Shoes</NavItem>
        <NavItem>Accessories</NavItem>
        <NavItem>Sale</NavItem>
      </Nav>
    </Header>
  );
};
