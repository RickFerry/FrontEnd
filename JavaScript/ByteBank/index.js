import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const joao = new Cliente("João", 12345678910);

console.log(joao);

const contaJoao = new ContaCorrente(12345, 20, joao);

console.log(contaJoao);

console.log(ContaCorrente.qtdContas);

/*const cc = new ContaCorrente();
cc.agencia = 123;
cc.saldo = 100.0;

//cc.sacar(100.01);
cc.sacar(0.01);

//cc.depositar(-0.01);
cc.depositar(0.01);*/

//joao.toString();
