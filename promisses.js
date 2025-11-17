//const minhaPromisse = new Promise((resolve, reject))

const minhaPromisse = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorio = Math.random()
        if(numeroAleatorio < 0.5) {
            resolve(numeroAleatorio)
        } else{
            reject('Erro ao gerar o numero')
        }
    }, 1000)
})

minhaPromisse
    .then((resultado) => {
        console.log(`Numero gerado ${resultado}`)
    }) 
    .catch((erro) => {
        console.log(erro)
    })

    