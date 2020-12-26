module.exports =
class Plano{

        // TIPOS DE PLANO
        //1 - Diária
        //2 - Mensalidade
        //3 - Anual
        //4 - Quilometragem

    constructor(tipoDeCarro, duracaoPlano, quilometragemRodada){
        this.tipoDeCarro = tipoDeCarro;
        this.duracaoPlano = duracaoPlano;
        this.quilometragemRodada = parseFloat(quilometragemRodada);
        this.tipoDePlano = this.selecionarPlano(1);
        this.valorDoPlano = this.calcularValorDoPlano();
    }

    getTipoDePlano(){

        return this.tipoDePlano;
    }

    getTipoDeCarro(){

        return this.tipoDeCarro;
    }

    calcularValorDoPlano(){
        let valor = 0;
        let plano = this.getTipoDePlano();
        let precoPorTipo = this.tabelaPrecoPorTipo();
        let duracaoTotal = 0;

        if(plano === 1){

            //Passa os meses para dias;
            this.duracaoPlano[1] *= 30;
            //Passa os anos para dias;
            this.duracaoPlano[2] *= 365;

            //Soma todo mundo em dia e retorna a qtd total de dias
            duracaoTotal = this.duracaoPlano.reduce((total, dias) => total + dias);

            //Calcula o valor total
            valor = precoPorTipo * duracaoTotal;

            return valor;
        }
        if(plano === 2){

            //Converte anos para meses
            this.duracaoPlano[2] *= 12;

            //Soma os meses
            duracaoTotal = this.duracaoPlano[1] + this.duracaoPlano[2];
            valor = precoPorTipo * this.duracaoTotal;

            //Soma a diária
            valor += (precoPorTipo * this.duracaoPlano[0]);
            return valor;
        }
        if(plano === 3){

            valor = precoPorTipo * this.duracaoPlano[2];
            valor += (precoPorTipo * this.duracaoPlano[1]); //Mensalidade
            valor += (precoPorTipo * this.duracaoPlano[0]); //Diária
            return valor;
        }
        if(plano === 4){

            valor = this.quilometragemRodada * 4.65;
            return valor;
        }else{

            return NaN;
        }
    }

    selecionarPlano(escolha){

        switch(escolha){
            case 1: return 1;
            case 2: return 2; 
            case 3: return 3;
            default: return null;
        }
    }

    tabelaPrecoPorTipo(){

        this.tipoDeCarro = this.tipoDeCarro.toUpperCase();

        if(this.tipoDeCarro === 'EXECUTIVO'){
            return 100.0;
        }
        if(this.tipoDeCarro === 'POPULAR'){
            return 30.0;
        }
        if(this.tipoDeCarro === 'BLINDADO'){
            return 45.0;
        }
        if(this.tipoDeCarro === 'SEMINOVO'){
            return 65.0
        }

        //Not a number - Em caso de erro irá comprometer todas as outras funções
        return NaN;
    }

}