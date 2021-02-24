const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientUserMap = new Schema({
    user: {
        ref: 'user',
        type: Schema.Types.ObjectId,
        required: true
    },
    ingredient: {
        ref: 'ingredients',
        type: Schema.Types.ObjectId,
        required: true
    }
});

export {};
module.exports = mongoose.model('ingredient_User_Map', ingredientUserMap);
