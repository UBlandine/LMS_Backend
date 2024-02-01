
const BookRouter = require('./book.routes');
const BorrowRouter = require('./borrow.routes');
const TransactionRouter = require('./transaction.routes');
const authRoute = require('./auth.routes');
const userRouter = require('./user.routes');
const express = require('express');


const allRoutes = express.Router();


allRoutes.use('/book', BookRouter);
allRoutes.use('/transaction', TransactionRouter);
allRoutes.use('/borrow', BorrowRouter);
allRoutes.use('/auth', authRoute);
allRoutes.use('/users',userRouter)

module.exports = allRoutes;