function criaPessoa(nome, sobrenome){
    const pessoaPrototype = { // variável que vai receber os protos
        falar(){
            console.log(`${this.nome} está falando`)
        },
        comer(){
            console.log(`${this.nome} está comendo`)
        },
        beber(){
            console.log(`${this.nome} está bebendo`)
        },
    }

    return Object.create(pessoaPrototype, { // com essa função posso passar quem vai ser o proto (passo a variável criada)
        nome: { value: nome }, 
        sobrenome: { value: sobrenome } // a vantagem de fazer assim é que tenho mais liberdade para configurar
    })
}

const p1 = criaPessoa('Arthur', 'Teixeira')
console.log(p1)