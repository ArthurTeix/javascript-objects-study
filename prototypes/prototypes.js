// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {return `${this.nome} ${this.sobrenome}` } // criei um método (nomeCompleto) que estará no prototype (__proto__) de toda instância criada a partir dessa classe


// instâncias
const p1 = new Pessoa('Arthur', 'T.') // tem o método 'nomeCompleto'
const p2 = new Pessoa('Ingrid', 'V.') // tbm tem o método 'nomeCompleto'

console.dir(p1)
console.dir(p2)
