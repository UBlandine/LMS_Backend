const express = require('express');
const UserRouter = require('./user.routes');
const BookRouter = require('./book.routes');
const BorrowRouter = require('./borrow.routes');
const TransactionRouter = require('./transaction.routes');

const allRoutes = express();

allRoutes.use('/user', UserRouter);
allRoutes.use('/book', BookRouter);
allRoutes.use('/transaction', TransactionRouter);
allRoutes.use('/borrow', BorrowRouter);
module.exports = allRoutes;