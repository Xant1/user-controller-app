const express = require('express');
const createController = require('../controllers/create.controller');
const addUserRouter = express.Router();

addUserRouter.use('/', createController.newUser);

module.exports = addUserRouter;
