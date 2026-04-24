//  Object.freeze(pessoa) <- usado para fixar as config de um objeto

// defineProperty - defineProperties
// usado para configurar as chaves de um objeto, como por exemplo, deixar uma chave não editável, ou seja, não pode ser reatribuida

function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'nome', {
        enumerable: true, // se aparece ou não na execução
        value: nome, // de onde vem o valor
        writable: true, // se o valor pode ser alterado ou não
        configurable: true // se posso reconfigurar a chave (também proíbe deletar)
    })

    Object.defineProperties(this, {
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },

        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('Camisa', 20, 3)
console.log(p1)