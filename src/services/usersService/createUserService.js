const userRepository = require('../../repositories/userRepository')


const createUserService = {

    async execute (userData){
        
        const createdUser = await userRepository.create(userData);
        
        return createdUser;

    }

}

module.exports = createUserService;