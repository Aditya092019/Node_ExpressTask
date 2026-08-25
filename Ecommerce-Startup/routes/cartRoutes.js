const express = require('express');
const router = express.Router();

const cartControllers = require('../controllers/cartControllers');

router.get('/:userid', cartControllers.getCartForUser);

router.post('/:userid', cartControllers.addProductToCart);

module.exports = router;