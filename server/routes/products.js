const express = require('express');
const productController = require('../controllers/products');

const router = express.Router();

router.route('/')
.post(productController.add)

module.exports = router;