const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string()
            .min(3, "mensagem mínima")
            .max(50,"mensagem máxima")
            .required("mensagem de obrigatoriedade"),
        descricao:yup.string()
            .min(3, "mensagem mínima")
            .max(50,"mensagem máxima")
            .required("mensagem de obrigatoriedade"),
    }
)

async function validarDepartamento(req, res, next){
    try{
        await schema.validate(req.body, { abortEarly: false}) //-> devolve todos os erros 
        next()
    }catch(error){
        return res.status(400).json({erros: error.errors})
    }
}

module.exports = {validarDepartamento}