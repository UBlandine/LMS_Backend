const express = require('express');
const BorrowRouter = express.Router();
const {borrowBook} = require('../controllers/borrow.controller')

BorrowRouter.post('/add', borrowBook);

module.exports = BorrowRouter;