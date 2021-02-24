const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
     dish: {
         ref: 'dish',
         type: Schema.Types.ObjectId,
         required: true
     },
     fruit: {
         type: String,
         required: true
     },
     spice: {
         type: String,
         required: true
     },
     vegetables: {
         type: String,
         required: true
     },
     meet: {
         type: String,
         required: true
     },
     fish: {
         type: String,
         required: true
     }
 });

export {};
module.exports = mongoose.model('ingredients', ingredientsSchema);
