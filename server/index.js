require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/ProductModel');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.set('debug', true);
mongoose.connect(`mongodb://${dbUser}:${dbPass}@ds237979.mlab.com:37979/plantain-commonwealth`);

// Product.create({ name: 'Shirt' });

app.get('/', async (req, res) => {
  const product = await Product.find({ name: 'Shirt' });
  return res.send(product);
});

/* eslint-disable */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
