let pilotName = prompt("Qual o nome do piloto?");
let velocity = 0
let acceleration = prompt("Qual a velocidade que gostaria para acelerar?");
let confirmAcceleration = confirm(`Deseja acelerar a nave para ${acceleration}km/s?`);

console.log(confirmAcceleration)

if (confirmAcceleration == true) {
    velocity = acceleration;
}

if (velocity <= 0) {
    alert('A nave está parada, Considere partir e aumentar a velocidade.');
} else if (velocity < 40) {
    alert('A nave está devagar, Considere aumentar a velocidade.');
} else if (velocity >= 40 && velocity < 80) {
    alert('A nave está numa boa velocidade.');
} else if (velocity >= 80 && velocity < 100) {
    alert('A nave está rápida, Considere diminuir a velocidade.');
} else if (velocity >= 100) {
    alert('A nave está rápida, [PERIGO] Controle Automático Forçado.');
}

alert(`Piloto: ${pilotName} \nVelocidade: ${velocity}km/s`);