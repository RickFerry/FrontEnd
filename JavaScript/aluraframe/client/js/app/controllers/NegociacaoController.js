
class NegociacaoController{

    constructor(){
        const $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValor = $('#valor');

        this._lista = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');

        this._msg = new Bind(
            new Mensagem(),
            new msgView($('#mensagemView')),
            'texto');
    }
    
    adicionar(event){
        event.preventDefault();
        this._lista.adiciona(this._criaNegociacao());
        this._msg.texto = 'Negociação realizada com sucesso!!!';
        this._limpaFormulario();
    }

    apaga(){
        this._lista.esvazia();
        this._msg.texto = 'Apagados com sucesso!!!';
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQtd.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    importaNegociacoes() {
         const service = new NegociacaoService();

         Promise.all([
             service.negociacoesSemana(),
             service.negociacoesAnterior(),
             service.negociacoesRetrasada()
         ]).then(negociacoes => {
             negociacoes
                 .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                 .forEach(negociacao => this._lista.adiciona(negociacao));
             this._msg.texto = 'Importe bem sucedido...'
         }).catch(erro => this._msg.texto = erro);
    }
}