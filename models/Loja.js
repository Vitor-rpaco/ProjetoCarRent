module.exports =
class Loja{

    //Loja poderia ter uma lista de clientes?
    constructor(rua, numero, UF){
        this.idLoja = Math.random();
        this.rua = rua;
        this.numero = numero;
        this.uf = UF;
        this.carrosReservados = [];
        this.carrosDisponiveis = [];
        this.listaDeCarros = [];
        this.reservas = [];
    }

    getIdLoja(){

        return this.idLoja;
    }

    getCarrosDisponiveis(){

        return this.carrosDisponiveis;
    }

    venderCarro(carro){

        let listaDisponiveis = this.removerCarro(carro, this.carrosDisponiveis);
        return listaDisponiveis;
    }

    adicionarNaFrota(carro){

        this.disponibilizarCarro(carro);
        return carro;
    }

    consultarReservas(){

        return this.reservas;
    }

    preencherlistaDeCarros(lista){

        for(let i = 0; i < lista.length; i++){

            this.listaDeCarros.push(lista[i]);
        }
        
    }

    buscarIndiceNaLista(item, lista){

        let indice = lista.indexOf(item);
        return indice;
    }

    buscaCarro(placa){

        this.preencherlistaDeCarros(this.carrosDisponiveis);
        this.preencherlistaDeCarros(this.carrosReservados);

        for(let i = 0; i < this.listaDeCarros.length; i++){

            if(this.listaDeCarros[i].placa === placa){
                return this.listaDeCarros[i];
            }
        }

        return null;
    }

    disponibilizarCarro(carro){

        //Disponibiliza o carro
        this.carrosDisponiveis.push(carro);

        //remove ele na lista
        this.carrosReservados = this.removerCarro(carro, this.carrosReservados);

        return this.carrosDisponiveis;
    }

    //Trocar para remover(item, lista)
    removerCarro(carro, lista){

        let indice = this.buscarIndiceNaLista(carro, lista);
        lista.splice(indice, 1);

        return lista;
    }

    reservaCarro(carro){

        //Reserva o carro
        this.carrosReservados.push(carro);

        //remove ele na lista
        this.carrosDisponiveis = this.removerCarro(carro, this.carrosDisponiveis);

        return this.carrosReservados;
    }

    listarCarros(){

        let disponiveis = this.carrosDisponiveis;

        for(let i = 0; i < disponiveis.length; i++){

            console.log(`${i+1} - ${disponiveis[i]}`);
        }

        return disponiveis;
    }

    confirmarReserva(reserva, carro){

        this.reservas.push(reserva);

        this.reservaCarro(carro);

        return this.reservas;
    }
    
    devolucao(reserva, carro){

        //Disponibiliza carro
        this.disponibilizarCarro(carro);

        let listaReservas = this.removerCarro(reserva, this.reservas);

        return listaReservas;
    }
}