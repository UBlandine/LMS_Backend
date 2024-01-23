const express = require('express');
const TransactionRouter = express.Router();
const { record, findById, remove, list, update,findByTransaction } = require('../controllers/transaction.controller');

TransactionRouter.post('/add', record);
TransactionRouter.get('/list', list);
TransactionRouter.put('/update', update);
TransactionRouter.delete('/delete', remove);
TransactionRouter.get('/findById', findById);
TransactionRouter.get('/findByTransaction', findByTransaction);



module.exports = TransactionRouter;

