const yup = require("yup");
const mongoose = require("mongoose");

const schema = yup.object().shape({

    nome: yup.string().required(),
    descricao: yup.string().required().min(50).max(200),
    dataInicio: yup.date().required(),
    dataFim: yup.date().required()
    
});

async function validarProjeto(req, res, next){
    try{
        await schema.validate(req.body, {abortEarly: false})
        next()
    }catch(error){
        return res.status(400).json({erros: error.errors})
    }
}

module.exports = {validarProjeto}