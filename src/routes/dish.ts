const express = require('express');
const dishController = require('../controllers/dish');
const router = express.Router();

router.get('/', dishController.getDishs);
router.get('/:id', dishController.getDishById);

export {};
module.exports = router;
