const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT,
        ssl: {rejectUnauthorized: false}    
    }
});

module.exports = knex;