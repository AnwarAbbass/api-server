'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app=require('./src/server.js');

console.log(PORT);
mongoose
.connect(process.env.MONGOOSE_URI,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.start(PORT);
    })
    .catch((err)=>{
        console.log('ERROR',err.mssage);
    });