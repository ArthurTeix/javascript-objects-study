// Class Pai
// vou criar uma classe Conta comum e depois fazer ela poder ser poupança ou corrente
function Conta(agencia, conta, saldo){
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
}

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente! | Saldo: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar= function(valor){
    this.saldo += valor
    this.verSaldo()
}

// Filha de Conta
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){ // Criando polimorfismo (vai ter funcionamento diferente, mesmo sendo do mesmo pai de ContaPoupanca)
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo e Limite insuficientes! | Saldo: R$${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

// Filha de Conta
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo) // Extraindo do pai
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

// Mesmos comandos nas duas contas, mas com saídas diferentes (Polimorfismo)
const ContaCorrente1 = new ContaCorrente(11, 15, 0, 100)
ContaCorrente1.depositar(10)
ContaCorrente1.sacar(110)
ContaCorrente1.sacar(1)

console.log()

const ContaPoupanca1 = new ContaPoupanca(11, 15, 0)
ContaPoupanca1.depositar(10)
ContaPoupanca1.sacar(110)
ContaPoupanca1.sacar(1)