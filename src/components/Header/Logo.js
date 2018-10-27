import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Logo = styled(Link)`
  justify-self: start;

  img {
    max-height: 60px;
  }
`;

export default () => (
  <Logo to="/"><img src={logo} alt="" /></Logo>
);
