// Spaceships Class
class Spaceships {
    constructor(name, quantityCrewmates) {
        this.name = name
        this.crewQuantity = quantityCrewmates
        this.isHitched = false
        this.doorsOpen = false
    }

    hitchSpaceship() {
        this.isHitched = true
        this.doorsOpen = true
    }
}

// Show Menu Function
function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt('Escolha uma opção abaixo: \n1. Realizar engate \n2. Imprimir naves \n3. Sair do programa')
    }

    return chosenOption
}

// Register a new Spaceship
function createNewSpaceship() {
    let spaceshipName = prompt('Qual será o nome da nave?')
    let crewQuantity = prompt('Quantos tripulantes tem na nave?')
    let spaceship = new Spaceships(spaceshipName, crewQuantity)

    return spaceship
}

// Print Spaceship List
function spaceshipsList(spaceships) {
    let spaceshipsList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipsList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipsList)
}

let hitchedSpaceships = []
let chosenOption

// While Menu
do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let newSpaceship = createNewSpaceship()
            newSpaceship.hitchSpaceship()
            hitchedSpaceships.push(newSpaceship)
            break;
        case "2":
            spaceshipsList(hitchedSpaceships)
            break;
    }
} while (chosenOption != "3");
