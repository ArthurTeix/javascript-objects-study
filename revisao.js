// CRIANDO OBJETO COM CONSTRUTOR (new)
// const pessoa = new Object()
// pessoa.nome = 'Arthur'
// pessoa.sobrenome = 'Teixeira'

// CRIANDO OBJETO DA FORMA LITERAL
const pessoa = { // tudo dentro da chave é o 'corpo do objeto'
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 18,

    falaNome() {return `${this.nome} está falando seu nome`}, // funções dentro de objetos são chamadas de métodos

    getAnoNascimento() {
        const dataAtual = new Date()
        return dataAtual.getFullYear() - this.idade
    }
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])
console.log(pessoa.falaNome())
console.log(pessoa.getAnoNascimento())

for (let i in pessoa){ // ver todas as chaves do objeto
    console.log(i)
}
for (let i in pessoa){ // ver todos os valores do objeto
    console.log(pessoa[i])
}