const { userRepository } = require("../../repositories/userRepository")


const updateUserService = {

    async execute (userData){

        const updatedUser = await userRepository.create(userData);

        return updatedUser;

    }

}

module.exports = updateUserService;