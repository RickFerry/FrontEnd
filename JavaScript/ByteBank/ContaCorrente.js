import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static qtdContas = 0;
    _agencia;
    _saldo;
    _cliente;

    constructor(agencia, saldo, cliente){
        ContaCorrente.qtdContas += 1;
        this._agencia = agencia;
        this._saldo = saldo;
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }

    set agencia(agencia){
        this._agencia = agencia;
    }

    get agencia(){
        return this._agencia
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        return console.log("Saldo indisponivel...");
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
        console.log("Valor não reconhecido pelo sistema...");
    }

    transferir(valor, conta){
        if(this._saldo >= valor){
            const saque = this.sacar(valor);
            conta.depositar(saque);
        }    
        console.log("Valor indisponivel...")
    }

    toString() {
        console.log("Cliente: " + this._cliente + " Agência: " + this._agencia + " Saldo: " + this._saldo)
    }
}