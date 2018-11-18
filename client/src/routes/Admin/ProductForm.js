import React, { Component } from 'react';
import axios from 'axios';
import Form, { SelectWrap } from './Form';
import Alert from '../../components/Alert';
import { checkEmpty } from '../../util/helpers';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      values: {
        category: '',
        name: '',
        price: '',
        quantity: '',
        image: '',
      },
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios('/api/categories?populate=true').then(res => {
      this.setState({
        categories: res.data,
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
      .post('/api/products', { ...values })
      .then(() => {
        this.setState({
          values: {
            category: '',
            name: '',
            price: '',
            quantity: '',
            image: '',
          },
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { categories, values, error } = this.state;

    // Create all category options to assin a product too
    const categoryOptions = categories.map(cat => (
      <option value={cat._id} key={cat._id}>
        {cat.name} - ({cat.category_group.name})
      </option>
    ));

    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Product for Category</h3>
        <SelectWrap>
          <select onChange={this.handleChange} value={values.category} name="category">
            <option value="">Select Category...</option>
            {categoryOptions}
          </select>
        </SelectWrap>
        <input
          onChange={this.handleChange}
          value={values.name}
          name="name"
          placeholder="Product Name"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={values.price}
          name="price"
          placeholder="Price"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={values.quantity}
          name="quantity"
          placeholder="Quantity"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={values.image}
          name="image"
          placeholder="Image Filename"
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
