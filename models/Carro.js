module.exports = 
class Carro{

    constructor(placa, disponibilidade, status, descricao, tipoCarro, qtdDeVezesAlugado, localizacaoAtual){
        this.idCarro = Math.random();
        this.placa = placa;
        this.disponibilidade = disponibilidade;
        this.status = status;
        this.tipoCarro = tipoCarro;
        this.descricao = descricao;
        this.qtdDeVezesAlugado = qtdDeVezesAlugado;
        this.localizacaoAtual = localizacaoAtual;
    }

    //Getters
    getPlaca(){
        
        return this.placa;
    }

    getDisponibilidade(){

        return this.disponibilidade();
    }

    getStatus(){
        return this.status();
    }

    getTipoCarro(){

        return this.tipoCarro;
    }

    getDescricao(){

        return this.descricao;
    }

    getQtdDeVezesAlugado(){

        return this.qtdDeVezesAlugado;
    }

    getLocalizacaoAtual(){

        return this.localizacaoAtual;
    }

    //Setters

    setDisponibilidade(novaDisponibilidade){

        this.disponibilidade = novaDisponibilidade;
    }

    setStatus(novoStatus){

        this.status = novoStatus;
    }
    
    //Métodos
    contadorAlugado(){

        this.qtdDeVezesAlugado += 1;
        return this.qtdDeVezesAlugado;
    }

    busca(codigo){

        return this.placa === codigo ? true : false;
    }
}