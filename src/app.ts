// database
const configs = require('./configs');
const mongoose = require('mongoose');
mongoose.connect(configs.mongoURI, configs.mongoData).then(() => console.log('Connected to MongoDB')).catch((err: any) => console.log(err));

// app
const express = require('express');
const app = express();
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(require('cors')());

// routing
const userRoutes = require('./routes/user');
const dishRoutes = require('./routes/dish');
const ingredientRoutes = require('./routes/ingredients');
app.use('/api/users', userRoutes);
app.use('/api/dishs', dishRoutes);
app.use('/api/ingredients', ingredientRoutes);

module.exports = app;
