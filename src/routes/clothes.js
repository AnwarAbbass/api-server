'use strict';

const express = require('express');
const router = express.Router();

const DataMang = require('../models/data-collection-class')
const ClothesModel = require('../models/clothes.js');
const dataMang = new DataMang(ClothesModel)

router.get('/', getClothes);
router.get('/:id', getById);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteById);

async function getClothes(req, res) {
    try {
        const obj = await dataMang.read();
        res.json(obj);
    }
    catch (err) {
        next(err)
    }

}

async function getById(req, res) {
    try {
        const obj = await dataMang.read(req.params.id);
        res.json(obj);
    }
    catch (err) {
        next(err)
    }

}

async function createClothes(req, res) {
    try {
        const clothesobj = req.body;
        const obj = await dataMang.creat(clothesobj);
        res.status(201).json(obj);
    }
    catch (err) {
        next(err)
    }

}

async function updateClothes(req, res) {
    try {
        const clothesobj = req.body;
        const obj = await dataMang.update(req.params.id, clothesobj);
        res.json(obj);
    }
    catch (err) {
        next(err)
    }

}

async function deleteById(req, res) {
    try {
        const obj = await dataMang.delete(req.params.id);
        res.json(obj);
    }
    catch (err) {
        next(err)
    }

}

module.exports = router;
