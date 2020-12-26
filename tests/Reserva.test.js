const Reserva = require('../models/Reserva.js');
const Carro = require('../models/Carro.js');
const Cliente = require('../models/Cliente.js');

let carro = new Carro("LCD6192", true, "livre", "Um chevete 62", "EXECUTIVO", 1, 'RJ',);
let cliente = new Cliente('55623563', 'Alberto Alberto', '889854', '9999564', true, '1221', 'SP', 'RJ');
let reserva = new Reserva('RJ', 'SP', 7, 'Mensal', carro, cliente);

test('Calcula duracao aluguel', () => {

    //Duvida se posso fazer isso.
    expect(reserva.calculaDuracao())
    .toBeInstanceOf(Array);
});

test('emitir nota', () => {

    expect(reserva.emitirNota())
    .toBeInstanceOf(Reserva);
});