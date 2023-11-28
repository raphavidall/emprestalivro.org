const knex = require('../../config/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const login = {

    async handle (req, res){

        const { email, senha } = req.body;

        if(!email || !senha){
            return res.status(400).json({message: `Informe o seu e-mail e senha.`});
        }

        try {
            
            const user = await knex.select('*').from('usuarios').where({email});

            const verifyPassword = await bcrypt.compare(senha, user.senha);

            if(!user || !verifyPassword){
                return res.status(404).json({message: `Usuário ou senha inválido.`});
            }

            const token = await jwt.sign({id: user.id}, process.env.JWTPASS, {expiresIn: '1h'});

            const { senha:_, ...logedUser } = user;

            return res.status(200).json({user: logedUser, token });

        } catch (error) {
            return res.status(500).json({message: `Erro interno do servidor (login).`})
        }
    }

}

module.exports = login;