const express = require('express');
const indexController = require('../controllers/index.controller');
const deleteRouter = express.Router();

deleteRouter.use('/delete/:id', indexController.deleteUser);

module.exports = deleteRouter;
