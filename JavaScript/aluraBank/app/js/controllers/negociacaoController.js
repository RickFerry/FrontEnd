System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegociacaoController, diaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_1.MensagemView('#mensagemView', true);
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.html().replace(/-/g, ','));
                    if (this._diaUtil(data)) {
                        this._mensagemView.update('Negociações somente em dias uteis.');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.html()), parseFloat(this._inputValor.html()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação realizada com sucesso!!!');
                }
                _diaUtil(data) {
                    return data.getDay() == diaDaSemana.Sabado && data.getDay() == diaDaSemana.Domingo;
                }
                importaDados() {
                    function isOk(resp) {
                        if (resp.ok) {
                            return resp;
                        }
                        else {
                            throw new Error(resp.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(resp => isOk(resp))
                        .then(resp => resp.json())
                        .then((dados) => {
                        dados
                            .map(dado => new index_2.Negociacao(new Date(), dado.vezes, dado.montante))
                            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(err => console.log(err));
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaDaSemana) {
                diaDaSemana[diaDaSemana["Domingo"] = 0] = "Domingo";
                diaDaSemana[diaDaSemana["Segunda"] = 1] = "Segunda";
                diaDaSemana[diaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                diaDaSemana[diaDaSemana["Quarta"] = 3] = "Quarta";
                diaDaSemana[diaDaSemana["Quinta"] = 4] = "Quinta";
                diaDaSemana[diaDaSemana["Sexta"] = 5] = "Sexta";
                diaDaSemana[diaDaSemana["Sabado"] = 6] = "Sabado";
            })(diaDaSemana || (diaDaSemana = {}));
        }
    };
});
