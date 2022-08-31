const spaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = spaceships.filter(element => {
    return element[1] > 9
}).map(element => {
    return element[0]
})

let plataformInProgress = spaceships.findIndex(element => {
    return element[2] == false
})

let spaceshipsPlataformInProgress = spaceships.filter(element => {
    return element[2] == false
}).map(element => {
    return element[0]
})

let highlightSpaceships = spaceships.map(element => {
    return element[0].toUpperCase();
})

let infoMessage = (`As naves que possuem mais de 9 tripulantes são: ${crewGreaterThan9.join(", ")}
            \nPrimeira nave encontrada com plataforma pendente: ${plataformInProgress+1}
            \nNaves com plataformas pendentes: ${spaceshipsPlataformInProgress.join(", ")}
            \nNomes das naves em destaque: ${highlightSpaceships.join(", ")}`);

alert(infoMessage)
