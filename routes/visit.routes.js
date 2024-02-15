const express = require('express');
const VisitRouter = express.Router();
const {createVisit} = require('../controllers/visit.controller')

VisitRouter.post('/add', createVisit);

module.exports = VisitRouter;