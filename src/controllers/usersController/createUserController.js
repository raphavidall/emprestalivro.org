const { createdUserService }= require('../../services');
const bcrypt = require('bcrypt');

const createUserController = {

    async handle(req, res){
        
        const { nome, email } = req.body;
        let senhaUser = req.body.senha;

        try {

            const senha = await bcrypt.hash(senhaUser, 10);

            const createdUser = await createdUserService.execute({nome, email, senha});

            const {senha:_, ...user} = createdUser[0];

            return res.status(201).json(user);

        } catch (error) {
            return res.status(500).json({message: `Erro interno do servidor.`});
        }

    }

}

module.exports = createUserController;