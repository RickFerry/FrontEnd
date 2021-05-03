import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';
import { NegociacaoParcial } from "../models/index";

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        let data = new Date(this._inputData.html().replace(/-/g, ','));
        if (this._diaUtil(data)){
            this._mensagemView.update('Negociações somente em dias uteis.');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.html()),
            parseFloat(this._inputValor.html())
        );
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação realizada com sucesso!!!')
    }

    private _diaUtil(data: Date): boolean {
        return data.getDay() == diaDaSemana.Sabado && data.getDay() == diaDaSemana.Domingo;
    }

    importaDados(){

        function isOk(resp: Response) {

            if(resp.ok) {
                return resp;
            }else {
                throw new Error(resp.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then(resp => isOk(resp))
            .then(resp => resp.json())
            .then((dados: NegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(err => console.log(err));
    }
}

enum diaDaSemana{
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}