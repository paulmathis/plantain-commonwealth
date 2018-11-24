import styled, { css } from 'styled-components/macro';
import { desktop } from '../../util/mediaQueries';

export default styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  ${desktop(css`
    flex-direction: column;
    align-items: flex-start;
    grid-row: 2;
    grid-column: 1 / -1;
    overflow: hidden;
    transition: max-height 1s;
    max-height: ${props => (props.open ? '500px' : '0')};
  `)};
`;
