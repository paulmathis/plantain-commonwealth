/* eslint-disable camelcase */
import React, { Component } from 'react';
import axios from 'axios';
import Form, { SelectWrap } from './Form';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryGroups: [],
      category_group: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios('/api/category_groups').then(res => {
      this.setState({
        categoryGroups: res.data,
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('/api/categories', this.state)
      .then(() => {
        this.setState({ name: '', category_group: '' });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { categoryGroups, category_group, name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Category for Group</h3>
        <SelectWrap>
          <select name="category_group" onChange={this.handleChange} value={category_group}>
            <option value="">Select Category Group...</option>
            {categoryGroups.map(group => (
              <option value={group._id} key={group._id}>
                {group.name}
              </option>
            ))}
          </select>
        </SelectWrap>
        <input
          onChange={this.handleChange}
          value={name}
          name="name"
          placeholder="Category Name"
          type="text"
        />
        <button type="submit">Create</button>
      </Form>
    );
  }
}
