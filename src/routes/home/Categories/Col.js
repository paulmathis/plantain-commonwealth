import styled from 'styled-components';

export default styled.div`
  max-height: 800px;
  display: grid;
  grid-gap: 30px;

  &:nth-child(odd) {
    grid-template-rows: 3fr 2fr;
  }

  &:nth-child(even) {
    grid-template-rows: 2fr 3fr;
  }
`;
