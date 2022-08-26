let spaceship = prompt('Digite o nome da nave')
let chosenOption = prompt('Qual caractere deseja substituir?')
let chosenNewOption = prompt('Por qual novo caractere deseja substituir?')
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == chosenOption) {
        newSpaceship += chosenNewOption
    } else {
        newSpaceship += spaceship[i]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)