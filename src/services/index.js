const createdUserService = require('./usersService/createUserService');
const updatedUserService = require('./usersService/updateUserService');
const deletedUserService = require('./usersService/deleteUserService');

module.exports={
    createdUserService,
    updatedUserService,
    deletedUserService
}