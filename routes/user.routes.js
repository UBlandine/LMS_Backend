const express = require('express');
const passport = require('passport')
const {getUser} = require('../controller/user.controller');
const { findById, remove, list, update, findByEmail } = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/list', list);
userRouter.put('/update', update);
userRouter.delete('/delete', remove);
userRouter.get('/findById', findById);
userRouter.get('/findByEmail/:email', findByEmail);
userRouter.get('/profile',getUser);

module.exports= userRouter;
