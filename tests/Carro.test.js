const Carro = require('../models/Carro');

let carro = new Carro("LCD6192", true, "livre", "Um chevete 62", "sedan", 1, 'RJ');

test('Armazenar quantas vezes o carro foi alugado', () => {

    let target = (carro.getQtdDeVezesAlugado() + 1);

    expect(carro.contadorAlugado())
    .toBe(target);
});