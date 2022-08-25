let departureDateEntry = prompt("Digite sua data de nascimento no formato (DD/MM/YYYY)");
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");
let today = moment()
let dateDiff = today - departureDate
let chosenOption = prompt("Escolha uma opção: \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias");

if (chosenOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Você está ${secondsOfDeparture} segundos existindo na terra.`)
} else if (chosenOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert(`Você está ${minutesOfDeparture} minutos existindo na terra.`)
} else if (chosenOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert(`Você está ${hoursOfDeparture} horas existindo na terra.`)
} else if (chosenOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert(`Você está ${daysOfDeparture} dias existindo na terra.`)
} else {
    alert("Opção inválida!")
}
