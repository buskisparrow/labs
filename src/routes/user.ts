const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.get('/?ingredientId=:id', userController.getUserByIngredientId);

export {};
module.exports = router;
