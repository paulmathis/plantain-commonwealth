import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Filters from './Filters';

function Sidebar({ onSliderChange, categories, groupName, onSearchChange }) {
  return (
    <Wrapper>
      <Categories groupName={groupName} categories={categories} />
      <Filters onSliderChange={onSliderChange} onSearchChange={onSearchChange} />
    </Wrapper>
  );
}

Sidebar.propTypes = {
  onSliderChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  groupName: PropTypes.string.isRequired,
};

export default Sidebar;

const Wrapper = styled.div`
  h3 {
    font-weight: 900;
    margin-bottom: 5px;
  }
`;
