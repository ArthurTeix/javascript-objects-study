const produtos = new Map() // Criando objeto map, me permite adicionar chave e valor

produtos.set(1, 'Teclado') // set me permite adicionar os itens ao meu map
    .set(2, 'Monitor') // formato do set -> .set(chave, valor)
    .set(3, 'Mouse')

console.log(produtos.size) // .size retorna o tamanho do Map

console.log(produtos.has(2)) // .has(chave) retorna 'true' se a chave existe, e 'false' se não existe
console.log(produtos.has(4)) // .has(chave) retorna 'true' se a chave existe, e 'false' se não existe

console.log(produtos.get(2)) // .get(chave) retorna o valor da respectiva chave

produtos.set(1, 'Cadeira') // caso dê um set numa chave já existente, o valor é alterado

console.log(produtos)

console.log("================================================================")
// ======================================================

const listaFeira = new Map([ // posso criar um Map já com valores salvos nele, e adicionar mais depois
    ['1º', 'Arroz'],
    ['2º', 'Feijão'],
    ['3º', 'Carne']
])

listaFeira.set('4º', 'Legumes')

console.log(listaFeira)

console.log("================================================================")
// ======================================================

const materiaisEscolares = new Map()

materiaisEscolares.set(1, 'Lápis')
    .set(2, 'Caneta')
    .set(3, 'Caderno')
    .set(4, 'Livro')

for (item of materiaisEscolares){ // me retorna cada array, contendo chave e valor
    console.log(item)
}

for (item of materiaisEscolares){ // me retorna cada chave 
    console.log(item[0])
}

for (item of materiaisEscolares){ // me retorna cada valor
    console.log(item[1])
}

