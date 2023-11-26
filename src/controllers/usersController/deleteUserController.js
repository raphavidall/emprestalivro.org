const { deleteUserService }= require("../../services");



const deleteUserController = {

    async handle (req, res){

        try {
            
            const id = Number(req.params);

            const deletedUser = await deleteUserService;

            return res.status(200).json({message: `Usuário excluído com sucesso!`})

        } catch (error) {
            console.log(error);
            // return res.status(500).json(error);

        }

    }

}

module.exports = deleteUserController;