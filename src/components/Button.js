import styled, { css } from 'styled-components';

export default styled.button`
  background-color: white;
  color: ${({ theme }) => theme.black};
  border: none;
  width: 179px;
  height: 46px;
  font-size: 1.2em;
  font-weight: 100;
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.orange};
  }

  ${props => props.round
    && css`
      border-radius: 30px;
    `};
`;
