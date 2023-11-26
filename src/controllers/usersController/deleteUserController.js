const deleteUserService = require('../../services/usersService/deleteUserService');



const deleteUserController = {

    async handle (req, res){

        try {
            
            const id = Number(req.params.id);
            console.log(id);

            const deletedUser = await deleteUserService.execute(id);

            return res.status(200).json({message: `Usuário excluído com sucesso!`})

        } catch (error) {
            console.log(error);
            // return res.status(500).json(error);

        }

    }

}

module.exports = deleteUserController;