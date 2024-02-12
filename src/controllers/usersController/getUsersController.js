const { getUsersService }= require('../../services');

const getUsersController = {

    async handle(req, res){
        
        // const {usuario} = req.header; Token de Autorização

        try {

            const users = await getUsersService.execute();

            return res.status(201).json(users);

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: `Erro interno do servidor.`});
        }

    }

}

module.exports = getUsersController;