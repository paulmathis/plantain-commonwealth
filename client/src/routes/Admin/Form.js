import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  color: ${({ theme }) => theme.black};

  input {
    width: 100%;
    padding: 5px;
  }

  button {
    align-self: flex-start;
    padding: 7px 15px;
    background-color: #2196f3;
    color: white;
    &:disabled {
      background-color: #607d8b;
    }
  }

  button,
  div,
  input {
    margin-top: 20px;
  }
`;

export const SelectWrap = styled.div`
  border: 1px solid #d8d8d8;
  select {
    height: 32px;
    border: none;
    background-color: white;
    width: 100%;
    color: ${({ theme }) => theme.black};
  }
`;
