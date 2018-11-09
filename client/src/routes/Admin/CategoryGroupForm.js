import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

export default class CategoryGroupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      path: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('/api/category_groups', this.state)
      .then(() => {
        this.setState({ name: '', path: '' });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { name, path } = this.state;
    const inputRequired = name.length === 0 || path.length === 0;
    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Category Group</h3>
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Category Group Name"
          type="text"
          value={name}
        />
        <input
          onChange={this.handleChange}
          name="path"
          placeholder="URL Path"
          type="text"
          value={path}
        />
        <button disabled={inputRequired} type="submit">
          Create
        </button>
      </Form>
    );
  }
}
