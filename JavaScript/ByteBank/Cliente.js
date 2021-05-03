export class Cliente{
    _nome;
    _cpf;

    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    toString(){
        return console.log('Nome: ' + this._nome + ' Cpf: ' + this._cpf);
    }
}