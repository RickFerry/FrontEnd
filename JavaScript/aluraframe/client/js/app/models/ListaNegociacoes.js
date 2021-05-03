class ListaNegociacoes{

    constructor(){
        this._lista = [];
    }

    adiciona(negociacao){
        this._lista.push(negociacao);
    }

    get lista(){
        return [].concat(this._lista);
    }

    esvazia(){
        this._lista = [];
    }
}