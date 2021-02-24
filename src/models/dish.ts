const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
   dishName: {
       type: String,
       required: true
   }
});

export {};
module.exports = mongoose.model('dish', dishSchema);
