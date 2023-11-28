const express = require('express');
const login = require('../controllers/loginController/login');
const validacaoDados = require('../middlewares/validacaoDados');

const loginRoutes = express();

loginRoutes.post('/login', login.handle);

module.exports = loginRoutes;