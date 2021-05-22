'use strict';

const express = require('express');
const router = express.Router();

const DataMang = require('../models/data-collection-class')
const FoodModel = require('../models/food.js');
const dataMang = new DataMang(FoodModel)

router.get('/', getFood);
router.get('/:id', getById);
router.post('/', creatFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteById);

async function getFood(req, res) {
    try {
        const obj = await dataMang.read();
        res.json(obj);
    } catch (error) {
        next(error);
    }

}

async function getById(req, res) {
    try {
        const obj = await dataMang.read(req.params.id);
        res.json(obj);
    } catch (error) {
        next(error);
    }
}

async function creatFood(req, res) {
    try {
        const foodobj = req.body;
        const obj = await dataMang.creat(foodobj);
        res.status(201).json(obj);
    } catch (error) {
        next(error);
    }

}

async function updateFood(req, res) {
    try {
        const foodobj = req.body;
        const obj = await dataMang.update(req.params.id, foodobj);
        res.json(obj);
    } catch (error) {
        next(error);
    }

}

async function deleteById(req, res) {
    try {
        const obj = await dataMang.delete(req.params.id);
        res.json(obj);
    } catch (error) {
        next(error);
    }

}

module.exports = router;
