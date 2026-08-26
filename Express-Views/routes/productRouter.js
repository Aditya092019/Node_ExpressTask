const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.post('/', productControllers.postProducts);

module.exports = router;

