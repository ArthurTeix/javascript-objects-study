const produtos = new Map() 

produtos.set(1, 'Teclado') 
    .set(2, 'Monitor') 
    .set(3, 'Mouse')
    .set(4, 'Gabinete')
    .set(5, 'MousePad')

// produtos.clear() -> APAGA TODO O MAP
produtos.delete(5) // deleta um item de acordo com sua chave

console.log(produtos.keys()) // Retorna todas as chaves existentes
console.log(produtos.values()) // Retorna todos os valores existentes

// Posso passar mensagens no has, usando operações ternárias
console.log(produtos.has(4) ? 'Produto encontrado' : 'Produto não encontrado')
console.log(produtos.has(10) ? 'Produto encontrado' : 'Produto não encontrado')

console.log(produtos)
