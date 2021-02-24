const express = require('express');
const ingredientController = require('../controllers/ingredient');
const router = express.Router();

router.get('/', ingredientController.getIngredient);
router.get('/:id', ingredientController.getIngredientById);
router.get('/?userId=:id', ingredientController.getIngredientByUserId);

export {};
module.exports = router;
