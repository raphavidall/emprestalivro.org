const express = require('express');
const cors = require('cors');

const usersRoutes = require('./usersRoutes');


const rotas = (app) => {
    app.use(express.json(), cors(), usersRoutes);
    app.get("/", (req, res) => res.status(200).json({ message: "Bem-vindo ao emprestalivro.org!" }));
}

module.exports = rotas;