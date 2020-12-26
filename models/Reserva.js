const Plano = require('./Plano.js');

module.exports =
class Reserva{

    constructor(inicioAluguel, fimAluguel, necessarioMotorista, cidadeDestino, carroSelecionado){

        this.inicioAluguel = inicioAluguel;
        this.fimAluguel = fimAluguel;
        this.necessarioMotorista = necessarioMotorista;
        this.cidadeDestino = cidadeDestino;
        this.carroSelecionado = carroSelecionado;
        this.duracaoAluguel = this.calculaDuracao();
        this.plano = new Plano(this.carroSelecionado.tipoCarro, this.duracaoAluguel,
        3.453);
        this.valorReserva = this.plano.valorDoPlano;
        this.idReserva = Math.random();
    }

    getInicioAluguel(){

        return this.inicioAluguel;
    }

    getFimAluguel(){

        return this.fimAluguel;
    }

    calculaDuracao(){

        //Separa a data INICIO no formato DD/MM/AAAA
        let dataInicio = this.inicioAluguel;
        //Separa a data FIM no formato DD/MM/AAAA
        let dataFim = this.fimAluguel;

        //Diferença entre dias
        let dias = dataFim[0] - dataInicio[0];
        if(dias < 0) -1 * dias;

        let meses =  dataFim[1] - dataInicio[1];
        if(meses < 0) -1 * meses;

        let anos = dataFim[2] - dataInicio[2];
        if(anos < 0) -1 * anos;

        //Formato DD-MM-AA 'Forma o array contendo a duração do contrato'
        let duracao = [];
        duracao.push(dias);
        duracao.push(meses);
        duracao.push(anos);

        return duracao;
    }

    emitirNota(){
        
        return this;
    }
}