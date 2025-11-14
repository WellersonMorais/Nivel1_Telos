const nome = "Ana"
let diaUtil

for(let dia = 1; dia <=7; dia++){
    console.log(`Início do dia ${dia}`)

    if(dia == 6 || dia == 7) {
        diaUtil = false
        console.log("Fim de semana")
    } else {
        diaUtil = true
        console.log("Dia de semana")
    }

    if (diaUtil){
        let periodoDoDia = "Manhã"

        while(periodoDoDia != "Madrugada"){
            switch(periodoDoDia){
                case "Manhã":
                    console.log(`Durante a manhã, a ${nome} está estudando`)
                    periodoDoDia = "Tarde"
                    break
                case "Tarde":
                    console.log(`Durante a tarde a ${nome} esta fazendo atividade`)
                    periodoDoDia = "Noite"
                    break
                default:
                    console.log(`Durante a noite, a ${nome} está no tempo livre`)
                    periodoDoDia = "Madrugada"

            }
        }
    } else {
        console.log(`${nome} está descansando`)
    }

    console.log("Final do dia "+ dia)
    console.log("*********************************")
}