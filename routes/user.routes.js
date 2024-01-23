const express = require('express');
const UserRouter = express.Router();
const { record, findById, remove, list, update, findByEmail } = require('../controllers/user.controller');

UserRouter.post('/add', record);
UserRouter.get('/list', list);
UserRouter.put('/update', update);
UserRouter.delete('/delete', remove);
UserRouter.get('/findById', findById);
UserRouter.get('/findByEmail/:email', findByEmail);

module.exports = UserRouter;
