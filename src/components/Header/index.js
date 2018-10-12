import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NavItem from './NavItem';
import SearchSign from './SearchSign';

const Header = styled.header`
  text-align: center;
  position: relative;
`;

export default () => {
  return (
    <Header>
      <h1>Plantain Commonwealth</h1>
      <SearchSign />
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
