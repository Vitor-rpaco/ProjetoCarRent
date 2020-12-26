const Plano = require('../models/Plano.js');

let plano = new Plano('POPULAR', [3, 0, 0], 3.453);

test('Selecionar tipo de plano', () => {

    expect(plano.selecionarPlano(1))
    .toBe(1)
});

test('calcular Valor Do Plano', () => {

    expect(plano.calcularValorDoPlano())
    .toBe(90);
});

test('Selecionar plano inexistente', () => {

    expect(plano.selecionarPlano(5))
    .toBeNull();
});