let spaceship = prompt('Digite o nome da nave')
let invertedName = ""

for (let i = spaceship.length - 1; i >= 0; i--) {
    if (spaceship[i] == "e") {
        alert('Letra [E] encontrada, cancelando o restante!')
        break
    }
    invertedName += spaceship[i]
}

alert(`Nome original: ${spaceship} \nNome invertido: ${invertedName}`);
