import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: ${({ theme }) => theme.grey};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.brandPrimary};
  }
`;
