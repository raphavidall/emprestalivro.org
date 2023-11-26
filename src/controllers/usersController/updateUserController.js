const updateUserService = require("../../services/usersService/updateUserService");



const updateUserController = {

    async handle (req,res){

        try {
            
            const {nome, email, senha} = req.body;

            const updatedUser = await updateUserService.execute({nome, email, senha});

            return res.status(200).json({message: `Usuário atualizado com sucesso! ${updatedUser}`});

        } catch (error) {
          
            return res.status(500).json({error});

        }

    }

}

module.exports = updateUserController;