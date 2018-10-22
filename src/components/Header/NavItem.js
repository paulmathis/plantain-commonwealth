import styled from 'styled-components';

export default styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  border-bottom: 1px solid transparent;
  transition: all 0.4s;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }
`;
