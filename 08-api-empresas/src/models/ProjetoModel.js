const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    dataInicio: {type: String, required: true},
    dataFim: {type: String, required: true}

    
});


const ProjetoModel = mongoose.model('Projetos', schema)

module.exports = ProjetoModel
