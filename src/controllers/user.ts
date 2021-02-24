import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const User = require('../models/user');
const ingredientUserMap = require('../models/ingredientUserMap');

module.exports.getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const user = await User.findById({ _id: userId });
        res.status(200).send(user);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getUsersByIngredientId = async (req: Request, res: Response) => {
    const ingredientId = req.params.id;
    try {
        const ingredientUserMappings = await ingredientUserMap.find({ ingredient: ingredientId });
        const userIds = ingredientUserMappings.map((mapping: any) => mapping.user);
        const users = await User.find({_id: userIds});
        res.status(200).send(users);
    } catch (e) {
        errorHandler(res, 404);
    }
};
