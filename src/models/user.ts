import {text} from 'express';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
       type: Number,
       required: true
   },
   mail: {
       type: Number,
       required: true
   },
   pass: {
       type: String,
       required: true
   }
});

export {};
module.exports = mongoose.model('users', userSchema);
