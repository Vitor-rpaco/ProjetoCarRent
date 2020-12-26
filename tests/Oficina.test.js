const Oficina = require('../models/Oficina.js');
const Reserva = require('../models/Reserva.js');
const Carro = require('../models/Carro.js');

let carro = new Carro("LCD6192", true, "livre", "Um chevete 62", "sedan", 1, 'RJ');
let dataInicio =  [27, 3, 2020];
let dataFim = [30, 5, 2020];

let oficina = new Oficina('Zé do Carro', dataInicio, dataFim, 'RJ', carro);

test('Reservar carro', () => {

    expect(oficina.reservarCarro())
    .toBeInstanceOf(Reserva);
});

// Como testar algo cujo resultado é aleatório?
// test('Calcular valor conserto carro', () => {

//     expect(oficina.calcularValor())
//     .toBeInstanceOf(Number);
// });