const userRepository = require('../../repositories/userRepository')



const deleteUserService = {

    async execute (id){

        const deletedUser = await userRepository.delete(id);

        return deletedUser;

    }

}

module.exports = deleteUserService;