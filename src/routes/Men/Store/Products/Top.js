import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    padding: 10px;
    border: 1px solid #e6e6e6;
    color: ${({ theme }) => theme.grey};

    option {
      padding: 10px;
    }
  }

  p {
    color: ${({ theme }) => theme.extraLightGrey};
  }
`;

export default () => (
  <Top>
    <select name="" id="">
      <option value="">Popularity</option>
      <option value="">Price: low to high</option>
      <option value="">Price: high to low</option>
    </select>
    <p>Showing 12 of 100</p>
  </Top>
);
