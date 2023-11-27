const jwt = require('jsonwebtoken');
const knex = require('../config/connection');

const autenticacao = async (req, res, next) => {

    const { authorization } = req.headers;

    if(!autenticacao){
        return res.status(400).json({message: `Usuário não autorizado.`})
    }

    const token = authorization.split(" ")[1];

    try {

        const { id } = await jwt.verify(token, process.env.JWTPASS);

        const authUser = await knex.select('*').from('usuarios').where({id});

        console.log(authUser);

        if(!authUser){
            return res.status(404).json({message: `Usuário não autorizado.`});
        }

        const { senha:_, ...usuario } = authUser;

        req.usuario = usuario;

        next();

    } catch (error) {
        
        return res.status(500).json({message: `Erro interno do servidor (middleware autorização).`})

    }

}

module.exports = autenticacao;