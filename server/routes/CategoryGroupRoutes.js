const express = require('express');

const { create } = require('../controllers/CategoryGroupController');

const router = express.Router();

router.post('/', create);

module.exports = router;
