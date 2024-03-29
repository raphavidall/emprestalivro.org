const express = require('express');
const validacaoDados = require('../middlewares/validacaoDados');
const { createUserController, updateUserController, deleteUserController, getUsersController } = require('../controllers/usersController/index');

const usersRoutes = express();

usersRoutes.get('/usuarios', getUsersController.handle);
usersRoutes.post('/usuarios', validacaoDados, createUserController.handle);
usersRoutes.put('/usuarios/:id', validacaoDados, updateUserController.handle);
usersRoutes.delete('/usuarios/:id', deleteUserController.handle);

module.exports = usersRoutes;