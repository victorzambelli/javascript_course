export default class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }
    
    checkCurrentCharge() {
        return new Promise((resolve, reject) => {
            const currentCharge = this.spaceship.currentPercentCharge()

            currentCharge >= 30 ? resolve(currentCharge) : reject(currentCharge)
        })
    }

    turnOn() {
        this.checkCurrentCharge().then(currentCharge => {
            console.log(`${this.spaceship.name} Partida autorizada! Carga atual em: ${currentCharge.toFixed()}%`);
        }).catch(currentCharge => {
            console.log(`${this.spaceship.name} Partida não autorizada! Carga atual em: ${currentCharge}%`);
        });
    }
}