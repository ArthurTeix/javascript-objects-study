// Getter (GET): para receber valores
// Setter (SET): para atribuir valores

function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco, 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        // value: nome, (posso eliminar as duas chaves, já que quem vai trabalhar na variável é o GET/SET)
        // writable: true, 
        configurable: true, 
        get: () => { // a função do get é pegar o valor e me exibir
            return estoque
        },
        set: (valor) => { // onde vou atribuir o valor (posso proteger)
            if (typeof valor !== 'number'){ // permitindo apenas numeros
                throw new TypeError('Permitido apenas valores numéricos')
            } 

            estoque = valor
        }
    })
}

// const p1 = new Produto("camisa", 20, 3)
// console.log(p1)
// p1.estoque = 50 // inserindo valor, e permitindo apenas números
// console.log(p1.estoque)

// ==================================================================

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa', '') // posso reconfigurar meu valor de atribuição por aqui
            nome = valor
        }
    }
}

const p2 = criaProduto('bolsa') 
console.log(p2)
console.log(p2.nome)
p2.nome = 'Qualquer coisa'
console.log(p2.nome)
