import React, { Component } from 'react';
import axios from 'axios';
import Form, { SelectWrap } from './Form';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: '',
      name: '',
      price: '',
      quantity: '',
      image: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }

  componentDidMount() {
    axios('/api/categories').then(res => {
      this.setState({
        categories: res.data,
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // Check for number input only
  handleNumber(e) {
    const { quantity } = this.state;
    // If value will be a number or blank set the qantity to the new number, otherwise keep the original
    const validInput = Number(e.target.value) || e.target.value === '' ? e.target.value : quantity;
    this.setState({
      quantity: validInput,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { quantity, price } = this.state;

    axios
      .post('/api/products', { ...this.state, quantity: Number(quantity), price: Number(price) })
      .then(() => {
        this.setState({
          category: '',
          name: '',
          price: '',
          quantity: '',
          image: '',
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { categories, category, name, price, quantity, image } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} action="">
        <h3>Create Product for Category</h3>
        <SelectWrap>
          <select onChange={this.handleChange} value={category} name="category">
            <option value="">Select Category...</option>
            {categories.map(cat => (
              <option value={cat._id} key={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </SelectWrap>
        <input
          onChange={this.handleChange}
          value={name}
          name="name"
          placeholder="Product Name"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={price}
          name="price"
          placeholder="Price"
          type="text"
        />
        <input
          onChange={this.handleNumber}
          value={quantity}
          name="quantity"
          placeholder="Quantity"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={image}
          name="image"
          placeholder="Image URL Path"
          type="text"
        />
        <button type="submit">Create</button>
      </Form>
    );
  }
}
