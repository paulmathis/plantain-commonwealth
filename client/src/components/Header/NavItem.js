import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { desktop } from '../../util/mediaQueries';

export default styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  border-bottom: 1px solid transparent;
  transition: all 0.4s;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }

  ${desktop(css`
    background-color: ${({ theme }) => theme.brandPrimary};
    color: white;
    width: 100%;
    text-align: start;
    padding: 10px;
    border: none;
    :hover {
      border: none;
    }
  `)};
`;
