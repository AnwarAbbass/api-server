'use strict';
const mongoose= require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price : {type: String}
});
const FoodModel = mongoose.model('Food',foodSchema);

module.exports = FoodModel