let nome = "Wellerson Paulo"

console.log(nome)

console.log(nome.split(" "))

let tamanhoDaString = nome.length
console.log(tamanhoDaString)

console.log(nome.charAt(5)) //r
console.log(nome.charAt(0)) //W

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log(nome.substring(8,5)) //rso (inicial incluso, final nao incluso)

console.log(nome.slice(-6))  //paulo

console.log(nome.slice(5,8)) //rso

let sobrenome = "Morais"

console.log(nome + sobrenome)
console.log(nome.concat(sobrenome))
console.log(`${nome} ${sobrenome}`)
console.log(`O meu nome é ${nome}. O meu sobrenome é ${sobrenome}`)