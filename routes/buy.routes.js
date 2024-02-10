const express = require('express');
const BuyRouter = express.Router();
// const buyBook = express.Router();
const {buyBook} = require('../controllers/buy.controller')

BuyRouter.post('/add', buyBook);

module.exports = BuyRouter;