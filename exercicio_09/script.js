let spaceship = prompt('Digite o nome da nave')
let spaceshipVelocity = 0
let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Escolha uma opção a seguir: \n1. Acelerar a nave em 5km/s \n2. Desacelerar a nave em 5km/s \n3. Imprimir dados de bordo \n4. Sair do programa")
    }

    return option
}

// First Option
function acceleration(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

// Second Option
function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (velocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

// Third Option
function logSpaceBoardData() {
    alert(`Dados de Bordo \nNave: ${spaceship} \nVelocidade atual: ${spaceshipVelocity}km/s`)
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = acceleration(spaceshipVelocity)
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        case "3":
            logSpaceBoardData()
            break;
    
        default:
            break;
    }
} while (chosenOption != 4);
