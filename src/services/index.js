const createdUserService = require('./usersService/createUserService');
const updatedUserService = require('./usersService/updateUserService');
const deletedUserService = require('./usersService/deleteUserService');
const getUsersService = require('./usersService/getUsersService');

module.exports={
    createdUserService,
    updatedUserService,
    deletedUserService,
    getUsersService
}