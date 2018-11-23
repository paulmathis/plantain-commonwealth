import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Filters from './Filters';

function Sidebar({ onSliderChange }) {
  return (
    <Wrapper>
      <Categories />
      <Filters onSliderChange={onSliderChange} />
    </Wrapper>
  );
}

Sidebar.propTypes = {
  onSliderChange: PropTypes.func.isRequired,
};

export default Sidebar;

const Wrapper = styled.div`
  h3 {
    font-weight: 900;
    margin-bottom: 5px;
  }
`;
