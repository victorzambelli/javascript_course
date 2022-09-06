let spaceshipName = prompt('Qual nome da nave?')
let spaceshipType = prompt('Qual tipo da nave?')
let spaceshipMaxVelocity = Number(prompt('Qual será a velocidade máxima da nave?'))

let spaceshipInfo = {
    name: spaceshipName,
    type: spaceshipType,
    maxVelocity: spaceshipMaxVelocity,
    velocity: 0,
    acelerate: function(acceleration) {
        this.velocity += acceleration
    }
}

let chosenOption

function showMenu() {
    let option
    while (option != "stop" && option != "speedup" && option != "exit") {
        option = prompt('Você deseja parar ou acelerar a nave? \nSe deseja parar escreva: "stop" \nSe deseja acelerar escreva: "speedup" \nSe deseja sair escreva: "exit"')
    }

    return option
}

function speedup() {
    let acceleration = Number(prompt('Informe o quanto deseja acelerar em km/s'))
    spaceshipInfo.acelerate(acceleration)
    if (spaceshipInfo.velocity > spaceshipInfo.maxVelocity) {
        alert(`Velocidade máxima ultrapassada! \nVelocidade da nave: ${spaceshipInfo.velocity}km/s \nVelocidade máxima da nave: ${spaceshipInfo.maxVelocity}km/s`)
    }
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case 'stop':
            alert(`Nave Parada! \nNome da nave: ${spaceshipInfo.name} \nTipo da nave: ${spaceshipInfo.type} \nVelocidade atual: ${spaceshipInfo.velocity}km/s \nVelocidade máxima da nave: ${spaceshipInfo.maxVelocity}km/s`)
            break;
        
        case 'speedup':
            speedup()
            break;
    
        default:
            break;
    }
} while (chosenOption != 'exit')
