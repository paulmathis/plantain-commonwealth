require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

require('./bootstrap');
const { createRouter } = require('./util/helpers');
const CategoryGroupController = require('./controllers/CategoryGroupController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/category_groups', createRouter(CategoryGroupController));
app.use('/api/categories', createRouter(CategoryController));
app.use('/api/products', createRouter(ProductController));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
