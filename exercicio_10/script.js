function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) { // Verifica se velocidade é maior que 0
        printer(velocity) // callback (Imprimir essa velocidade)
        velocity -= deceleration // Velocidade a cada interação ser subtraida
    }

    alert(`A Nave está parada e as comportas podem ser abertas!`)
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    alert(`Velocidade atual: ${velocity}`);
})