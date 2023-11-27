const express = require('express');
const validacaoDados = require('../middlewares/validacaoDados');
const { createUserController, updateUserController, deleteUserController } = require('../controllers/usersController/index');

const usersRoutes = express();

usersRoutes.post('/usuarios', validacaoDados, createUserController.handle);
usersRoutes.put('/usuarios/:id', updateUserController.handle);
usersRoutes.delete('/usuarios/:id', deleteUserController.handle);

module.exports = usersRoutes;