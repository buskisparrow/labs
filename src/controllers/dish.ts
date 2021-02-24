import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const Dish = require('../models/dish');

module.exports.getDishs = async (req: Request, res: Response) => {
    try {
        const dishs = await Dish.find();
        res.status(200).send(dishs);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getDishById = async (req: Request, res: Response) => {
    const dishId = req.params.id;
    try {
        const dish = await Dish.findById({ _id: dishId });
        res.status(200).send(dish);
    } catch (e) {
        errorHandler(res, 404);
    }
};
