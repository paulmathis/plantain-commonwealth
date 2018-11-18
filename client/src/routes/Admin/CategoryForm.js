/* eslint-disable camelcase */
import React, { Component } from 'react';
import axios from 'axios';
import Form, { SelectWrap } from './Form';
import Alert from '../../components/Alert';
import { checkEmpty } from '../../util/helpers';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryGroups: [],
      values: {
        category_group: '',
        name: '',
      },
      error: false,
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
    const { values } = this.state;

    axios
      .post('/api/categories', values)
      .then(() => {
        this.setState({ values: { name: '', category_group: '' } });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { values, categoryGroups, error } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Category for Group</h3>
        <SelectWrap>
          <select name="category_group" onChange={this.handleChange} value={values.category_group}>
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
          value={values.name}
          name="name"
          placeholder="Category Name"
          type="text"
        />
        <button type="submit" disabled={checkEmpty(values)}>
          Create
        </button>
        {error && <Alert>An error occoured. Please check input data and try again.</Alert>}
      </Form>
    );
  }
}
