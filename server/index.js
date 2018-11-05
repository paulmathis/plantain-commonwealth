require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

require('./bootstrap');
const Product = require('./models/ProductModel');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

/* eslint-disable */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
