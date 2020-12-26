const Reserva = require('../models/Reserva.js');

module.exports=
class Oficina{

    constructor(nomeOficina, inicioAluguel, fimAluguel, cidade, carro){

        this.nomeOficina = nomeOficina;
        this.inicioAluguel = inicioAluguel;
        this.fimAluguel = fimAluguel;
        this.cidade = cidade;
        this.carro = carro;
        this.reserva = this.reservarCarro();
        this.valorConserto = this.calcularValor();
    }

    reservarCarro(){
        let reserva = new Reserva(this.inicioAluguel, this.fimAluguel, false, this.cidade, this.carro);
        return reserva;
    }

    calcularValor(){

        let conserto = Math.floor(Math.random() * (4 - 1)) + 1;

        //Tabela de valores
        if(conserto === 1){
            return 320.20;
        }
        if(conserto === 2){
            return 500.00
        }
        if(conserto === 3){
            return 1000.00
        }
        if(conserto === 4){
            return 1500.00;
        }
    }

}