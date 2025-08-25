function soma(a,b){
    return a + b
}

function subtracao(a,b){
    return a - b
}

function multiplicacao(a,b){
    return a * b
}

function divisao(a,b){
    return a / b
}

function potenciacao(a){
    return Math.pow(a, 2)
}

function raizQuadrada(a){
    return Math.sqrt(a)
}


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    potenciacao,
    raizQuadrada
}