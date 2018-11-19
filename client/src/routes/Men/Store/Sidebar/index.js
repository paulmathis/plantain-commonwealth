import React from 'react';
import styled from 'styled-components/macro';

import Categories from './Categories';
import Filters from './Filters';

const Wrapper = styled.div`
  h3 {
    font-weight: 900;
    margin-bottom: 5px;
  }
`;

export default ({ onSliderChange }) => (
  <Wrapper>
    <Categories />
    <Filters onSliderChange={onSliderChange} />
  </Wrapper>
);
