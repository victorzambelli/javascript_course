const Planet = require('./planet')
const operation = require('./operations')

let planets = [
    new Planet('Mercúrio', 0.39),
    new Planet('Vênus', 0.72),
    new Planet('Terra', 1),
    new Planet('Marte', 1.52),
    new Planet('Júpiter', 5.2),
    new Planet('Saturno', 9.53),
    new Planet('Urano', 19.1),
    new Planet('Neturno', 30)
]

planets.forEach(planet => {
    let conversao = operation.convertAuToKm(planet.auToSun);

    console.log(`Planeta: ${planet.name} \nAU: ${planet.auToSun} \nKM: ${conversao.toFixed(2)}`);
})