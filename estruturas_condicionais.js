const idade1 = 70
const idade2 = 20

const salario1= 300000
const salario2= 1600

if(idade1 >= 60 && salario1 >= 150000) {
    console.log("Véi da lancha")
}

if(idade2 <= 25 && salario1 >= 150000) {
    console.log("Novin rico")
}

if(idade1 >= 60 && salario2 <= 2000) {
    console.log("Véi pobi")
}

if(idade2 <= 25 && salario2 <= 2000) {
    console.log("Clt")
}

const resultado = 5 % 3

switch (resultado) {
    case 0: console.log("o número é par")
        break

    case 1: console.log("o numero é ímpar")
        break

    default: console.log("desconhecido")
}


