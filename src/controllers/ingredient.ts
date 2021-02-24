import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const Ingredient = require('../models/indigrients');
const IngredientUserMap = require('../models/ingredientUserMap');

module.exports.getIngredients = async (req: Request, res: Response) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).send(ingredients);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getIngredientById = async (req: Request, res: Response) => {
    const ingredientId = req.params.id;
    try {
        const ingredient = await Ingredient.findById({ _id: ingredientId });
        res.status(200).send(ingredient);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getIngredientByUserId = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const ingredientUserMappings = await IngredientUserMap.find({ user: userId });
        const ingredientIds = ingredientUserMappings.map((mapping: any) => mapping.ingredient);
        const ingredients = await Ingredient.find({_id: ingredientIds});
        res.status(200).send(ingredients);
    } catch (e) {
        errorHandler(res, 404);
    }
};
