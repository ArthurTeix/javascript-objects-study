const objeto = {nome: 'caneta', preco: 3}
const outraCoisa = objeto // as duas constantes estão apontando para o mesmo lugar na memória
objeto.nome = 'carro'
objeto.preco = 500

// Logo, terão o mesmo valor 
console.log(objeto)
console.log(outraCoisa) 

// para evitar posso usar o 'spread operator'
const outraCoisa1 = { ...objeto, marca: 'BMW' } // posso copiar e add elementos
objeto.nome = 'saco'
objeto.preco = 200 

// agora as alterações em objeto não afetam outraCoisa1, difetente de antes
console.log(objeto)
console.log(outraCoisa1)

// Retorna as chaves do meu objeto (em um array)
console.log(Object.keys(outraCoisa1))

// Me passa as config defineProperty de certa chave do meu objeto (em um objeto)
console.log(Object.getOwnPropertyDescriptor(objeto, 'nome'))
console.log(Object.getOwnPropertyDescriptor(objeto, 'preco'))

// Retorna uma matriz contendo key e value do objeto
console.log(Object.entries(outraCoisa1))

for (let [key, value] of Object.entries(outraCoisa1)){
    console.log(`${key}: ${value}`)
}