import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import NavItem from './components/NavItem';

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
