import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Hero from '../../components/Hero';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

const SelectWrap = styled.div`
  border: 1px solid #d8d8d8;
  select {
    height: 32px;
    border: none;
    background-color: white;
    width: 100%;
    color: ${({ theme }) => theme.black};
  }
`;

const Form = styled.form`
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
  }

  button,
  div,
  input {
    margin-top: 20px;
  }
`;

export default () => (
  <React.Fragment>
    <Hero xsmall>
      <h1>Admin</h1>
    </Hero>
    <Container>
      <Grid>
        <Form action="">
          <h3>Create Category Group</h3>
          <input placeholder="Category Group Name" type="text" />
          <input placeholder="URL Path" type="text" />
          <button type="submit">Create</button>
        </Form>
        <Form action="">
          <h3>Create Category for Group</h3>
          <SelectWrap>
            <select>
              <option value="">Select Category Group...</option>
            </select>
          </SelectWrap>
          <input placeholder="Category Name" type="text" />
          <button type="submit">Create</button>
        </Form>
        <Form action="">
          <h3>Create Product for Category</h3>
          <SelectWrap>
            <select>
              <option value="">Select Category...</option>
            </select>
          </SelectWrap>
          <input placeholder="Product Name" type="text" />
          <input placeholder="Price" type="text" />
          <input placeholder="Quantity" type="text" />
          <input placeholder="Image URL Path" type="text" />
          <button type="submit">Create</button>
        </Form>
      </Grid>
    </Container>
  </React.Fragment>
);
