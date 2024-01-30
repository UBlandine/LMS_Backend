require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const allRoutes = require('./routes');
const app = express();


app.use(express.json());
app.use('/api/sms/v1', allRoutes);+


app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(res => {
        console.log('> Database successfull connected...'.bgBlue);
        console.log(`> Server running on port ${process.env.PORT}...`.bgCyan.black);
    })
    .catch(err =>("Error connecting...."))
});