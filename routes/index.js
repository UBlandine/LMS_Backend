
const BookRouter = require('./book.routes');
const BorrowRouter = require('./borrow.routes');
const BuyRouter = require('./buy.routes');
const TransactionRouter = require('./transaction.routes');
const authRoute = require('./auth.routes');
const userRouter = require('./user.routes');
const express = require('express');
const VisitRouter = require('./visit.routes');

const allRoutes = express.Router();


allRoutes.use('/book', BookRouter);
allRoutes.use('/transaction', TransactionRouter);
allRoutes.use('/borrow', BorrowRouter);
allRoutes.use('/buy', BuyRouter);
allRoutes.use('/auth', authRoute);
allRoutes.use('/users',userRouter);
allRoutes.use('/visit', VisitRouter);

module.exports = allRoutes;