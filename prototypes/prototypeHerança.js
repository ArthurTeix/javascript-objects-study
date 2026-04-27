// Produto-> aumento, desconto
//  camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){ // Camiseta herda tudo que Produto tem, mas pode ter suas keys e métodos específicos (como por exemplo: cor)
    Produto.call(this, nome, preco) // tenho que passar quem vai ser o this

    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype) // Aqui meu construtor passa a ser Produto, mas não é isso que quero

Camiseta.prototype.constructor = Camiseta // Aqui corrijo o construtor

// vou fazer o mesmo processo que fiz com camiseta
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => { return estoque },
        set: (valor) => {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)

Caneca.prototype.constructor = Caneca

const produto = new Produto("Generico", 110)
const camiseta = new Camiseta('Regata', 8, 'Preta')
const caneca = new Caneca('Copo', 20, 'Porcelana', 5)

camiseta.aumento(15) // camiseta tem todos os métodos de Produto, pois herdou na linha 22, menos o construtor que corrigi na linha 24

caneca.desconto(12)
caneca.estoque = 20
caneca.estoque = 'dez'

console.log(produto)
console.log(camiseta) // preco: 8 -> 23
console.log(caneca) // preco: 20 -> 10 
console.log(caneca.estoque) // estoque: 20 (dez nao passa pois não é number)
