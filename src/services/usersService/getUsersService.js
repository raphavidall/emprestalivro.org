const userRepository = require('../../repositories/userRepository')


const getUsersService = {

    async execute(){
        
        const users = await userRepository.get();
        
        return users;

    }

}

module.exports = getUsersService;