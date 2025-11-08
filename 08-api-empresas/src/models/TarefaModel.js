const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    dataInicio: {type: String, required: true},
    dataFim: {type: String, required: true},
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Funcionarios",
        required: true
    },
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projetos",
        required: true
    }
    
    
});


const TarefaModel = mongoose.model('Tarefas', schema)

module.exports = TarefaModel
