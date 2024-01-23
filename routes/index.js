const express = require('express');
const UserRouter = require('./user.routes');
const BookRouter = require('./book.routes');
const TransactionRouter = require('./transaction.routes');

const allRoutes = express();

allRoutes.use('/user', UserRouter);
allRoutes.use('/book', BookRouter);
allRoutes.use('/transaction', TransactionRouter);
module.exports = allRoutes;