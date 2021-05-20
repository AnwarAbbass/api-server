'use strict';

require('dotenv').config;
const { server } = require('../src/server.js');
const superTest = require('supertest');
const req = superTest(server);
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_TEST_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, async () => await mongoose.connection.db.dropDatabase());

let id;


describe('server test', () => {

    afterAll(() => mongoose.connection.close());

    it('notfound rout error ', async () => {
        const res = await req.get('/uuu')
        expect(res.status).toBe(404);
    });

    it('real rout ', async () => {
        const res = await req.get('/')
        expect(res.status).toEqual(200);
    });

});

describe('Test food', () => {
    afterAll(() => mongoose.connection.close());

    it('should create a new food using post req', async () => {
        //arrange
        let food = {
            name: 'pizza',
            price: '5JD'
        }
        //act
        const res = await req.post('/api/v1/food').send(food);
        //assert
        expect(res.status).toEqual(201);
        expect(res.body.data.name).toEqual('pizza');
        expect(res.body.data.price).toEqual('5JD');
        expect(res.body.id.length).toBeGreaterThan(0);

        id = res.body._id;
    });

    it('should get food using get req ', async () => {
        const res = await req.get('/api/v1/food')
        expect(res.status).toBe(200);
    });



    it('should get food by id using get req ', async () => {
        const res = await req.get(`/api/v1/food${id}`)
        expect(res.status).toBe(200);
    });


    it('should update a food using put req', async () => {
        //arrange
        let food = {
            name: 'pizza',
            price: '6JD'
        };
        //act
        const res = await req.put(`/api/v1/food/${id}`)
            .send(food);
        //asert
        expect(res.status).toEqual(200);
        expect(res.body.data.price).toEqual('6JD');
    });

    it('should delete a food using delete req', async () => {
        //arrange
        let food = {
            name: 'pizza',
            price: '5JD'
        };
        //act
        const res = await req.delete(`/api/v1/food/${id}`)
            .send(food);
        //asert
        expect(res.status).toEqual(200);
    });

});

describe('Test clothes', () => {
    afterAll(() => mongoose.connection.close());

    it('should create a new clothes using post req', async () => {
        //arrange
        let clothes = {
            name: 'Dress',
            price: '5JD'
        }
        //act
        const res = await req.post('/api/v1/clothes').send(clothes);
        //assert
        expect(res.status).toEqual(201);
        expect(res.body.data.name).toEqual('Dress');
        expect(res.body.data.price).toEqual('5JD');
        expect(res.body.id.length).toBeGreaterThan(0);

        id = res.body._id;
    });

    it('should get clothes using get req ', async () => {
        const res = await req.get('/api/v1/clothes')
        expect(res.status).toBe(200);
    });


    it('should get clothes by id using get req ', async () => {
        const res = await req.get(`/api/v1/clothes${id}`)
        expect(res.status).toBe(200);
    });


    it('should update a clothes using put req', async () => {
        //arrange
        let clothes = {
            name: 'Dress',
            price: '6JD'
        };
        //act
        const res = await req.put(`/api/v1/clothes/${id}`)
            .send(clothes);
        //asert
        expect(res.status).toEqual(200);
        expect(res.body.data.price).toEqual('6JD');
    });

    it('should delete a clothes using delete req', async () => {
        //arrange
        let clothes = {
            name: 'Dress',
            price: '5JD'
        };
        //act
        const res = await req.delete(`/api/v1/clothes/${id}`)
            .send(clothes);
        //asert
        expect(res.status).toEqual(200);
    });

});