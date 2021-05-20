'use strict';

require('dotenv').config;
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app=require('./src/server.js');

mongoose.connect(process.env.MONGOOSE_URI,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.start(PORT);
    })
    .catch((err)=>{
        console.log('ERROR',err.mssage);
    });