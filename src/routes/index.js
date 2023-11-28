const express = require('express');
const cors = require('cors');

const usersRoutes = require('./usersRoutes');
const loginRoutes = require('./loginRoutes');


const rotas = (app) => {
    app.use(express.json(), cors(), usersRoutes, loginRoutes);
    app.get("/", (req, res) => res.status(200).json({ message: "Bem-vindo ao emprestalivro.org!" }));
}

module.exports = rotas;