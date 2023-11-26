const express = require('express');
const rotas = require('./routes/index')

const app = express();

rotas(app)

module.exports = app;