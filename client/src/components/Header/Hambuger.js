import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { desktop } from '../../util/mediaQueries';

const Hambuger = ({ active, onClick }) => {
  const change = active ? 'change' : '';
  return (
    <Wrapper onClick={onClick}>
      <div className={`${change} bar1`} />
      <div className={`${change} bar2`} />
      <div className={`${change} bar3`} />
    </Wrapper>
  );
};

Hambuger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hambuger;

const Wrapper = styled.button`
  border: none;
  display: none;
  background: none;
  margin-left: 5px;
  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
  .bar3 {
    margin-bottom: 0;
  }
  .change.bar1 {
    transform: rotate(-45deg) translate(-6px, 7px);
  }

  .change.bar2 {
    opacity: 0;
  }

  .change.bar3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }
  ${desktop(css`
    display: block;
  `)};
`;
