const Cliente =  require('../models/Cliente.js');
const Loja = require('../models/Loja.js');
const Carro = require('../models/Carro.js');
const Reserva = require('../models/Reserva.js');

/*Arrange*/
let loja = new Loja('Avenida Seicentos', '256', 'RJ');
let cliente = new Cliente('55623563', 'Alberto Alberto', '889854', '9999564', true, '1221', 'SP', 'RJ', loja);
let carro = new Carro("LCD6191", true, "DISPONIVEL", "Um chevete 63", "sedan", 1, 'RJ',);
let carro2 = new Carro("LCD6192", false, "OFICINA", "Um chevete 62", "sedan", 1, 'RJ',);
let carro3 = new Carro("LCD6193", true, "DISPONIVEL", "Um chevete 61", "hatch", 1, 'SP',);

loja.adicionarNaFrota(carro);
loja.adicionarNaFrota(carro2);
loja.adicionarNaFrota(carro3);
let carrosDisponiveis = loja.listarCarros();
/*Testes*/

test('Selecionar carro', () => {
    
    expect(cliente.selecionarCarro(1, carrosDisponiveis))
    .toBeInstanceOf(Carro);
});

test('Reservar carro', () => {

    expect(cliente.reservarCarro(carrosDisponiveis))
    .toBeInstanceOf(Reserva);
});

test('Devolver Carro', () => {

    expect(cliente.devolverCarro())
    .toBeTruthy();
});

test('Valida pagamento', () => {

    expect(cliente.pagamento())
    .toBeTruthy();
});