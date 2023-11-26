const knex = require('../config/connection');

const validacaoDados = async (req, res, next) => {
    const {nome, email, senha } = req.body;

    if(!nome || !email || !senha){
        return res.status(400).json({message: `Todos os campos são obrigatórios.`});
    }

    if(nome.trim() == "" || email.trim() == "" || senha.trim() == ""){
        return res.status(400).json({message: `Todos os campos são obrigatórios.`});
    }
    
    const emailValido = email.slice(email.indexOf('@')).includes('.');
    
    if(!emailValido){
        return res.status(400).json({message: `E-mail inválido.`});
    }

    const emailExiste = await knex.select('*').from('usuarios').where({email});

    if(emailExiste[0]){
        return res.status(400).json({message: `E-mail já cadastrado.`});
    }

    next();
}

module.exports = validacaoDados;