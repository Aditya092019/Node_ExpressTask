const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers)

router.post('/', userControllers.addUsers)

router.get('/:id', userControllers.getUsersByID)




module.exports = router;