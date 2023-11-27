const userRepository = require("../../repositories/userRepository")


const updateUserService = {

    async execute (userData){

        const updatedUser = await userRepository.update(userData);

        return updatedUser;

    }

}

module.exports = updateUserService;