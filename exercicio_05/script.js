let distance = prompt('Qual a distância em anos-luz?')

let chosenOpt = prompt('Para qual unidade deseja converter?\n1. Parsec (pc)\n2. Unidade astronômica (AU)\n3. Quilômetros (km)')

let chosenUnity
let convertedDistance

switch (chosenOpt) {
    case "1":
        chosenUnity = 'Parsec'
        convertedDistance = distance * 0.30660
        alert(`Distância em Anos-luz: ${distance}\nDistância Convertida: ${convertedDistance}pc\nUnidade Escolhida: ${chosenUnity}`)
        break;
        
    case "2":
        chosenUnity = 'Unidade astronômica'
        convertedDistance = distance * 63241.1
        alert(`Distância em Anos-luz: ${distance}\nDistância Convertida: ${convertedDistance}au\nUnidade Escolhida: ${chosenUnity}`)
        break;
        
    case "3":
        chosenUnity = 'Quilômetros'
        convertedDistance = distance * 9.5 * Math.pow(10, 12)
        alert(`Distância em Anos-luz: ${distance}\nDistância Convertida: ${convertedDistance}km\nUnidade Escolhida: ${chosenUnity}`)
        break;

    default:
        chosenUnity = 'Unidade não identificada'
        convertedDistance = 'Conversão fora do escopo'
        console.log(`Distância em Anos-luz: ${distance}\n${chosenUnity}:${convertedDistance}`)
        break;
}