class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    negociacoesSemana(){

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }).catch(erro => {
                    console.log(erro);
                    reject('Falha ao tentar obter negociações desta semana.');
            });
        });
    }

    negociacoesAnterior(){

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }).catch(erro => {
                console.log(erro);
                reject('Falha ao tentar obter negociações da semana anterior');
            });
        });
    }

    negociacoesRetrasada(){

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }).catch(erro => {
                console.log(erro);
                reject('Falha ao tentar obter negociações da semana retrasada');
            });
        });
    }
}