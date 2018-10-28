import styled from 'styled-components/macro';

export default styled.a`
  color: ${({ theme }) => theme.grey};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.brandPrimary};
  }
`;
