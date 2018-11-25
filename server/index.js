require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./bootstrap');
const { createRouter } = require('./util/helpers');
const CategoryGroupController = require('./controllers/CategoryGroupController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Use client build to serve react app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/category_groups', createRouter(CategoryGroupController));
app.use('/api/categories', createRouter(CategoryController));
app.use('/api/products', createRouter(ProductController));

// Redirect back to react index if route not found, react will handle 404's
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
