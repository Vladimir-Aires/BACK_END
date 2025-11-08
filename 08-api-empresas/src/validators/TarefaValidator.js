const yup = require("yup");
const mongoose = require("mongoose");

const schema = yup.object().shape({


    titulo: yup.string().required().min(10).max(100),
    descricao: yup.string().required().min(50).max(200),
    dataInicio: yup.date().required(),
    dataFim: yup.date().required(),
    funcionario: yup.string().required().test(
        "id-validator","id do funcionário é inválido", (value) => mongoose.Types.ObjectId.isValid(value)
    ),
    projeto: yup.string().required().test(
        "id-validator", "id do projeto é inválido", (value) => mongoose.Types.ObjectId.isValid(value)
    )
   
});

async function validarTarefa(req, res, next){
    try{
        await schema.validate(req.body, {abortEarly: false})
        next()
    }catch(error){
        return res.status(400).json({erros: error.errors})
    }
}

module.exports = {validarTarefa}