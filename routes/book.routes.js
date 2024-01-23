const express = require('express');
const BookRouter = express.Router();
const { record, findById, remove, list, update} = require('../controllers/book.controller');

BookRouter.post('/add', record);
BookRouter.get('/list', list);
BookRouter.put('/update', update);
BookRouter.delete('/delete', remove);
BookRouter.get('/findById', findById);


module.exports = BookRouter;
