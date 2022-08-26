let spaceshipName = prompt('Digite o nome da nave')
let chosenOption = prompt('Deseja entrar em dobra espacial? \n1- Sim \n2- Não')
let warpCount = 0

// Se a resposta for sim contabilizar dobra++
while (chosenOption == "1") {
    warpCount++
    chosenOption = prompt('Deseja realizar a próxima dobra? \n1- Sim \n2- Não')
}

alert(`Nome da nave: ${spaceshipName} \nDobras espaciais realizadas: ${warpCount}`)
