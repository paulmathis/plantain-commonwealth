import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'styled-components';
import Nav from './Nav';
import NavItem from './NavItem';
import Logo from './Logo';
import { desktop } from '../../util/mediaQueries';

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

  .logo {
    justify-self: start;
    max-height: 60px;
  }

  .account {
    justify-self: end;
    font-size: 2em;
    display: flex;
    svg {
      margin: 0 5px 0 5px;
      color: ${({ theme }) => theme.lightGrey};
      cursor: pointer;
    }
  }

  .shopping {
    position: relative;
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

  .hamburger {
    display: none;
  }

  ${desktop(css`
    /* padding: 0 20px 0 20px; */
    padding: 0;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    position: absolute;

    .account {
      padding-right: 20px;
    }

    .hamburger {
      display: block;
    }

    nav {
      grid-row: 2;
      grid-column: 1 / -1;
      overflow: hidden;
      transition: max-height 1s;
    }

    .closed {
      max-height: 0;
    }

    .open {
      max-height: 500px;
    }
  `)};
`;

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
        <Nav className={navOpen ? 'open' : 'closed'}>
          <NavItem to="/">New Arrivals</NavItem>
          <NavItem to="/women">Women</NavItem>
          <NavItem to="/men">Men</NavItem>
          <NavItem to="/shoes">Shoes</NavItem>
          <NavItem to="/accessories">Accessories</NavItem>
          <NavItem to="/sale">Sale</NavItem>
        </Nav>
        <div className="account">
          <FontAwesomeIcon icon="user-circle" />
          <div className="shopping">
            <FontAwesomeIcon icon="shopping-bag" />
            <span>2</span>
          </div>
          <button type="button" className="hamburger" onClick={this.handleToggle}>
            =
          </button>
        </div>
      </Header>
    );
  }
}
