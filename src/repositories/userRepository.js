const knex = require("../config/connection");


const userRepository = {

    create: async function (userData){

        const {nome, email, senha } = userData;

        const newUser = await knex('usuarios')
            .insert({nome, email, senha})
            .into('usuarios')
            .returning('*');

        return newUser;

    },

    update: async function (userData){

        const {nome, email, senha, id } = userData;

        const updatedUser = await knex('usuarios')
        .update({nome, email, senha})
        .where({id})
        .returning('*');

        return updatedUser;

    },

    delete: async function (id){

        const deletedUser = await knex('usuarios').where({id}).del().returning('*');

        return deletedUser;

    }

}

module.exports = userRepository;