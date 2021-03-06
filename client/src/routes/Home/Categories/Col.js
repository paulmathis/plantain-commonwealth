import styled from 'styled-components/macro';

export default styled.div`
  display: grid;
  grid-gap: 30px;

  &:nth-child(odd) {
    grid-template-rows: 3fr 2fr;
  }

  &:nth-child(even) {
    grid-template-rows: 2fr 3fr;
  }
`;
