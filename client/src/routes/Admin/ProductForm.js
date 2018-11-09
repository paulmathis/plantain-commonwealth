import React, { Component } from 'react';
import Form, { SelectWrap } from './Form';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
    );
  }
}
