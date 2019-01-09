import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  select {
    padding: 10px;
    border: 1px solid #e6e6e6;
    color: ${({ theme }) => theme.grey};
    margin-right: 20px;

    option {
      padding: 10px;
    }
  }

  p {
    color: ${({ theme }) => theme.extraLightGrey};
    padding: 10px;
  }
`;

const Top = ({ total }) => (
  <Wrapper>
    <select name="" id="">
      <option value="">Popularity</option>
      <option value="">Price: low to high</option>
      <option value="">Price: high to low</option>
    </select>
    <p>
      Showing {total} of {total}
    </p>
  </Wrapper>
);

Top.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Top;
