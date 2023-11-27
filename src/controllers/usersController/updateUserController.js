const updateUserService = require("../../services/usersService/updateUserService");
const bcrypt = require('bcrypt');


const updateUserController = {

    async handle (req, res){

        try {
            const id = Number(req.params.id);

            const {nome, email, senha} = req.body;

            const criptPass = await bcrypt.hash(senha, 10);

            const updatedUser = await updateUserService.execute({nome, email, senha: criptPass, id});

            return res.status(200).json({message: `Usuário atualizado com sucesso! ${updatedUser}`});

        } catch (error) {
            console.log(error);
            return res.status(500).json({error});

        }

    }

}

module.exports = updateUserController;