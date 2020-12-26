const Reserva = require('../models/Reserva.js');

module.exports =
class Cliente{

    constructor(idCliente, nome, habilitacao, cpf, filiado, idFiliacao, destino, retorno, loja){

        this.idCliente = idCliente;
        this.nome = nome;
        this.habilitacao = habilitacao;
        this.cpf = cpf;
        this.filiado = filiado;
        this.idFiliacao = idFiliacao;
        this.destino = destino;
        this.retorno = retorno;
        this.reserva;
        this.loja = loja;
    }
    
    selecionarCarro(escolha, carros){
        
        escolha -= 1;
        let carro = carros[escolha];
        return carro;
    }

    reservarCarro(carros){

        //Escolha de um desses carros
        let escolha = 1;

        //Recebe o carro disponível
        let carro = this.selecionarCarro(escolha, carros);
        
        //Recebe a reserva de um carro
        let dataInicio = [20, 12, 2020];
        let dataFim = [22, 12, 2021];
        let reserva = new Reserva(dataInicio, dataFim, false, 'SP', carro);
        
        if(this.pagamento(reserva.valorReserva)){

            this.reserva = reserva;
            this.loja.confirmarReserva(this.reserva, carro);

            return reserva;
        }else{
            return false;
        }
    }

    devolverCarro(){

        let carro = this.reserva.carroSelecionado;
        let reserva = this.reserva;

        let removida = this.loja.devolucao(reserva, carro);

        //Se tiver recebido um array contendo reservas, então foi feita a remoção
        if(removida){
            return true;
        }
        return false;
    }

    pagamento(valor){

        console.log(`Valor pago: ${valor}`);
        return true;
    }
}