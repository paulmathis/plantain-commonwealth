import { css } from 'styled-components';
import styled from 'styled-components/macro';
import mediaQueries from '../../util/mediaQueries';

export default styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  ${mediaQueries.desktop(css`
    flex-direction: column;
    align-items: flex-start;
  `)};
`;
