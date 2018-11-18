import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Alert from '../../components/Alert';
import { checkEmpty } from '../../util/helpers';

export default class CategoryGroupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: '',
        path: '',
      },
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('/api/category_groups', this.state)
      .then(() => {
        this.setState({ values: { name: '', path: '' } });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { values, error } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Category Group</h3>
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Category Group Name"
          type="text"
          value={values.name}
        />
        <input
          onChange={this.handleChange}
          name="path"
          placeholder="URL Path"
          type="text"
          value={values.path}
        />
        <button disabled={checkEmpty(values)} type="submit">
          Create
        </button>
        {error && <Alert>An error occoured. Please check input data and try again.</Alert>}
      </Form>
    );
  }
}
