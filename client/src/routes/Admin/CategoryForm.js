import React, { Component } from 'react';
import Form, { SelectWrap } from './Form';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
    );
  }
}
