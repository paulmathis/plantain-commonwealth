import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const SearchSign = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export default () => {
  return (
    <SearchSign>
      <Input />
      <Button>Sign In</Button>
    </SearchSign>
  );
};
