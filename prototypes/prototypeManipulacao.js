const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}
const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB.chaveA)
console.log(objC.chaveB)
console.log(objC.chaveA)

// ============================================================

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100))
}

Produto.prototype.aumento = function(aumento) {
    this.preco = this.preco + (this.preco * (aumento / 100))
}

const p1 = new Produto('Camiseta', 20)
p1.desconto(50) // reduziu o preco para 10
console.log(p1) // preco: 10
p1.aumento(100) // voltou para 20, pois aumentou 100% do valor atual (10)
console.log(p1) // preco: 20

const p2 = { // como criei um objeto literal, ele tem como protótipo o Object.prototype, e não o Produto.prototype, ou seja, ele não tem acesso aos métodos desconto e aumento
    nome: 'Caneca',
    preco: 50
}

// para que o p2 tenha acesso aos métodos do Produto.prototype, preciso setar o protótipo dele para Produto.prototype
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(50) // agora ele tem acesso ao método desconto, e o preco é reduzido para 25
console.log(p2) // preco: 25