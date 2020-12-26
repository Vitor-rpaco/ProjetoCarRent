const Loja = require('../models/Loja.js');
const Carro = require('../models/Carro.js');
const Reserva = require('../models/Reserva.js');

let dataInicio = [20, 12, 2020];
let dataFim = [22, 12, 2021];
let loja = new Loja('Avenida Seiscentos', '256', 'RJ');
let carro = new Carro('LCD6102', true, 'Disponivel', 'EXECUTIVO', 'Carro Grande quatro portas', 2, 'RJ');
let carro2 = new Carro('LCD6103', true, 'Disponivel', 'POPULAR', 'Carro Médio quatro portas', 2, 'RJ');
let reserva = new Reserva(dataInicio, dataFim, false, 'SP', carro);
let reserva2 = new Reserva(dataInicio, dataFim, false, 'SP', carro2);

test('Adicionar carro a frota', () => {

    expect(loja.adicionarNaFrota(carro))
    .toBe(carro);
});

test('Vender carro', () => {

    expect(loja.venderCarro(carro))
    .not.toContain(carro);
});

test('Adicionar na lista de carros disponiveis', () => {

    expect(loja.disponibilizarCarro(carro))
    .toContainEqual(carro);
});

test('Remover carro', () => {

    expect(loja.removerCarro(carro, loja.carrosDisponiveis))
    .not.toContain(carro);
});

test('Busca carro', () =>{

    loja.disponibilizarCarro(carro);
    expect(loja.buscaCarro("LCD6102"))
    .toBeInstanceOf(Carro);
})

test('reserva carro', () =>{

    expect(loja.reservaCarro(carro))
    .toContain(carro);
});

test('Confirmar reserva', () => {

    expect(loja.confirmarReserva(reserva, carro))
    .toContainEqual(reserva);
});

test('Devolucao de carro', () => {

    loja.confirmarReserva(reserva2, carro2);
    expect(loja.devolucao(reserva, carro))
    .not.toContain(reserva);
});