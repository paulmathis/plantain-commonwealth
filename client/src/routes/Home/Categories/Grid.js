import styled, { css } from 'styled-components/macro';
import { desktop } from '../../../util/mediaQueries';

export default styled.section`
  max-height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  ${desktop(css`
    grid-template-columns: minmax(auto, 500px);
    max-height: 100%;
    justify-content: center;
  `)};
`;
