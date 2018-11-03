import React from 'react';
import styled from 'styled-components/macro';
import Link from '../../../../components/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  a {
    margin-top: 13px;
  }
`;

export default () => (
  <Wrapper>
    <h3>Categories</h3>
    <Link to="/">Tees</Link>
    <Link to="/">Shirts</Link>
    <Link to="/">Suits</Link>
    <Link to="/">Pants</Link>
    <Link to="/">Shorts</Link>
  </Wrapper>
);
