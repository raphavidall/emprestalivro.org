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

    const id = Number(req.params.id);
    console.log(emailExiste);

    if(id && emailExiste[0]){
        if(emailExiste[0].id === id){
            next();
        }else{
            return res.status(400).json({message: `E-mail já cadastrado.`});
        }
    }else{
        if(emailExiste[0]){
            return res.status(400).json({message: `E-mail já cadastrado.`});
        }else{
            next();
        }
    }

}

module.exports = validacaoDados;