const express = require('express')

const router = express.Router()


router.get("/calculadora/notaA1", (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)



    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: "Notas inválidas!!!"})
    }
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || prova < 0 || prova > 6){
        return res.status(400).json({erro: "Notas fora do intervalo!!!"})
    }

    const notaA1 = exercicio + trabalho + prova

    res.json({notaA1})
})

//rota para calcular nota A2
router.get("/calculadora/notaA2", (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio);
    const trabalho = parseFloat(req.query.trabalho);
    const prova = parseFloat(req.query.prova)

    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: "Notas inválidas!!!"})
    }

    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6){
        return res.status(400).json({erro: "Notas fora do intervalo!!!"})

       
    }

     const notaA2 = exercicio + trabalho + prova

        res.json({notaA2})
})

//rota de cálculo da média final
router.get("/calculadora/media", (req, res, next) => {
    const notaA1 = parseFloat(req.query.notaA1)
    const notaA2 = parseFloat(req.query.notaA2)

    if(isNaN(notaA1) || isNaN(notaA2)){
        return res.status(400).json({erro: "Notas inválidas!!!"})
    }

    if(notaA1 < 0 || notaA1 > 10 || notaA2 < 0 || notaA2 > 10){
       return res.status(400).json({erro: "Notas fora do intervalo!!!"})
    }

    const media = (notaA1 * 0.4) + (notaA2 * 0.6)

    res.json({media})


    //exportando o roteador
    module.exports = router
})