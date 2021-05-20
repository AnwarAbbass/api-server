'use strict';
const mongoose= require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price : {type: String}
});
const ClothesModel = mongoose.model('Clothes',clothesSchema);

module.exports = ClothesModel