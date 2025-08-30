const calculadora = require("./calculadora");

describe('Teste de calculadora', () => {
    test('1 + 2 = 3', () => {
        expect(calculadora.soma(1,2)).toBe(3)
    });

    test('1 * 0 = 0', () => {
        expect(calculadora.multiplicacao(1, 0)).toEqual(0)
    })

    test('2 - 5 não é 3', () => {
        expect(calculadora.subtracao(2,5)).not.toBe(3)
    })
    test('5 / 3 é aproximadamente 1.7', () => {
        expect(calculadora.divisao(5,3)).toBeCloseTo(1.7, 1)
    })

    test('divisão por zero deve retornar Infinity', () => {
        expect(calculadora.divisao(10, 0)).toBe(Infinity)
    })
})